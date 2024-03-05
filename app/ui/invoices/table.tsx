// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

// export default async function InvoicesTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
//   const invoices = await fetchFilteredInvoices(query, currentPage);

//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             {invoices?.map((invoice) => (
//               <div
//                 key={invoice.id}
//                 className="mb-2 w-full rounded-md bg-white p-4"
//               >
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div>
//                     <div className="mb-2 flex items-center">
//                       <Image
//                         src={invoice.image_url}
//                         className="mr-2 rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                     <p className="text-sm text-gray-500">{invoice.email}</p>
//                   </div>
//                   <InvoiceStatus status={invoice.status} />
//                 </div>
//                 <div className="flex w-full items-center justify-between pt-4">
//                   <div>
//                     <p className="text-xl font-medium">
//                       {formatCurrency(invoice.amount)}
//                     </p>
//                     <p>{formatDateToLocal(invoice.date)}</p>
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <UpdateInvoice id={invoice.id} />
//                     <DeleteInvoice id={invoice.id} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Customer
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Email
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Status
//                 </th>
//                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {invoices?.map((invoice) => (
//                 <tr
//                   key={invoice.id}
//                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                 >
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src={invoice.image_url}
//                         className="rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {invoice.email}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatCurrency(invoice.amount)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatDateToLocal(invoice.date)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     <InvoiceStatus status={invoice.status} />
//                   </td>
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex justify-end gap-3">
//                       <UpdateInvoice id={invoice.id} />
//                       <DeleteInvoice id={invoice.id} />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />;

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <p
              className={`  text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Welcome to Acme.</strong> This is the example for the{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js Learn Course
              </a>
              , brought to you by Vercel.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}

