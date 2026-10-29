import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  projectSummary?: string;
  consent?: boolean;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    // 1. Bot check: Honeypot field must be empty
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Silently accept bot to prevent tuning
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out. We will review your inquiry shortly.",
      });
    }

    // 2. Server-side validation
    const name = body.name?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim();
    const projectSummary = body.projectSummary?.trim();
    const company = body.company?.trim() || "Not specified";
    const consent = body.consent;

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Please select a service or area of interest." },
        { status: 400 }
      );
    }

    if (!projectSummary || projectSummary.length < 15) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide at least 15 characters outlining your project requirements.",
        },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          success: false,
          message: "Consent to process inquiry details is required.",
        },
        { status: 400 }
      );
    }

    // 3. Structured log / integration dispatch
    const timestamp = new Date().toISOString();
    console.log("[ARAVANTA TECH CONTACT SUBMISSION]", {
      timestamp,
      name,
      email,
      company,
      service,
      projectSummaryLength: projectSummary.length,
    });

    // In a live production environment with SMTP/Resend/SendGrid credentials configured:
    // const apiKey = process.env.RESEND_API_KEY;
    // if (apiKey) { ...send email... }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting ARAVANTA TECH. Your inquiry has been logged and assigned to our senior architecture team. We will respond within one business day.",
        referenceId: `AT-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
