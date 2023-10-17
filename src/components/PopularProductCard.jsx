import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, name, price, rate }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserat text-xl leading-normal text-slate-gray'>
          {rate}
        </p>
      </div>
      <h3 className='mt-2 text-xl leading-normal font-samibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl'>{price}</p>
    </div>
  )
}
export default PopularProductCard
