export type Session = {
  id: string;
  topic: string;
  paper: 1 | 2;
  sessionNumber: number;
  date: string;
  isoDate: string;
  description: string;
  groupA: { price: number; time: string; duration: string };
  groupB: { price: number; time: string; duration: string };
};

export type Group = "a" | "b";

export type GroupInfo = {
  label: string;
  time: string;
  duration: string;
  pricePerSession: number;
  description: string;
  totalSessions: number;
  couponCode: string;
  couponDiscount: number;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  result?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContentBlock = {
  id: string;
  block_key: string;
  block_type: string;
  content: string;
  content_json: Record<string, unknown> | null;
  page_key: string;
  section_key: string;
  sort_order: number;
};

export type FormSubmissionPayload = {
  account_id: string;
  site_id: string;
  form_id: string;
  data: Record<string, string>;
  source_url: string;
  metadata: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    referrer?: string;
    landing_url?: string;
    form_slug?: string;
    submitted_at: string;
    user_agent?: string;
  };
};
