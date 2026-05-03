# Formspree Setup (Contact Form -> Email)

Your form is already wired to this endpoint by default:

`https://formspree.io/f/mrejbrak`

## Optional env override

If you want to change endpoint later, set this in `.env`:

```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-new-id
```

## Current behavior

1. User clicks `Submit Inquiry`
2. Form sends data to Formspree in background
3. User sees success/error status on page
4. You receive inquiry by email via Formspree
