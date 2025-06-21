import { CurrencyDollarIcon ,QrCodeIcon,DocumentDuplicateIcon,ArrowUpIcon,ShieldCheckIcon,TrashIcon} from '@heroicons/react/24/outline';


export default function AboutSection() {
  return (
    <section id="about" className="bg-tertiary py-16 px-6 text-center">
      <h2 className="text-[40px] font-semibold text-primary mb-10">About MenuQR</h2>

      <p className="max-w-5xl mx-auto text-secondary text-[25px]">
        MenuQR helps restaurants create beautiful digital menus instantly using manual input or an image/PDF upload. Select from elegant templates and share via QR code — simple and hassle-free.
      </p>
      <h2 className="text-[40px] font-semibold text-primary mt-20">Why Go Digital</h2>
      <div className='flex w-screen justify-center items-center flex-wrap gap-40 max-w-4xl mx-auto mt-10 border-2 border-secondary-400 p-10'>
        <div className='flex flex-col items-center'>
            <CurrencyDollarIcon className="size-30 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>No printing costs.</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <TrashIcon className="size-40 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>Damage free.</p>
        </div>
        <div className='flex flex-col items-center'>
            <ShieldCheckIcon className="size-30 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>Safe and touch free.</p>
        </div>
      </div>
      <h2 className="text-[40px] font-semibold text-primary mb-4 mt-5">How It Works</h2>
      <div className='flex w-screen justify-center items-center flex-wrap gap-40 max-w-4xl mx-auto mt-10 border-2 border-secondary-400 p-5'>
        <div className='flex flex-col items-center'>
            <DocumentDuplicateIcon className="size-30 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>Choose your template.</p>
        </div>
        <div className='flex flex-col items-center'>
            <ArrowUpIcon className="size-30 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>Input menu items.</p>
        </div>
        <div className='flex flex-col items-center space-between'>
            <QrCodeIcon className="size-30 text-secondary h-40 w-40" />
            <p className='text-secondary text-lg mt-5 '>Share via QR code.</p>
        </div>
      </div>

    </section>
  );
}
