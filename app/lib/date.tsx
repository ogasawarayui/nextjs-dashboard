import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

const likes = 100;
const { rows, fields } =
  await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT 5;`;

  // Fetch the last 5 invoices, sorted by date
const data = await sql<LatestInvoiceRaw>`
SELECT invoices.amount, customers.name, customers.image_url, customers.email
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
ORDER BY invoices.date DESC
LIMIT 5`;
const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;

export async function fetchCardData() {
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;
 
    const data = await Promise.all([