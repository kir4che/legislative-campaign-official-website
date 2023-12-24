import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

const SupportAndService: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  const [isDonated, setIsDonated] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleDonate = () => setIsDonated(true)

  const handleDonateClose = () => {
    setIsDonated(false)
    setSelectedPlan(0)
  }

  return (
    <article className='flex flex-col sm:flex-row justify-center md:w-11/12 lg:w-full mx-auto gap-6 py-16 px-[4vw] lg:py-26 lg:px-[8.5vw]'>
      <div id="support" className='bg-primary-color sm:w-[640px] h-[80vw] sm:h-[38vw] lg:h-[36vw] flex flex-col justify-between px-12 py-16 sm:px-6 sm:py-10 lg:px-12 lg:py-16 xl:px-16 xl:py-20 rounded-3xl'>
        <div className='text-white'>
          <h1 className='lg:text-5.5xl whitespace-nowrap mb-4 lg:mb-8 font-MantouSans '>小額支持喵喵</h1>
          <h5>您的小筆捐款，是每隻毛孩未來的大大動力！</h5>
        </div>
        <div className='flex items-end justify-between'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className='flex items-center px-6 py-4 space-x-1 bg-white rounded-full'>
                <span className='text-base font-bold'>小額捐款</span>
                <img width="28" height="28" src="https://img.icons8.com/sf-regular-filled/48/right.png" alt="right-arrow" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 pb-10 left-1/2 max-h-[85%] overflow-y-scroll lg:overflow-y-hidden w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-5 sm:px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none">
                <Dialog.Title className="my-6 font-bold text-text-color">
                  <h3>小額捐款</h3>
                </Dialog.Title>
                <article className='flex flex-col gap-10 lg:flex-row'>
                  <section className='w-full p-10 lg:p-14 rounded-4xl bg-bg-color-2'>
                    <h1 className='font-bold leading-tight text-primary-color'>您的小筆捐款<br />是每隻毛孩未來的大大動力！</h1>
                    <p className='mt-4 mb-1'>目前小額贊助總金額</p>
                    <h2 className='font-bold'>987,655,873</h2>
                    <img src="../public/assets/images/small-donation.png" alt="small-donation" className='w-56 mx-auto' />
                  </section>
                  {isDonated ? (
                    <section className='flex flex-col items-center justify-center w-11/12 space-y-8'>
                      <h3 className='font-bold'>感謝您的捐款</h3>
                      <img src="../public/assets/images/Group 15.png" alt="success" className='w-56' />
                      <Dialog.Close>
                        <button className='w-56 py-3 font-semibold rounded-full bg-slate-100 hover:bg-slate-200' onClick={handleDonateClose}>關閉</button>
                      </Dialog.Close>
                    </section>
                  ) : (
                    <section className='space-y-8 lg:w-11/12'>
                      <h5 className='font-bold'>捐款方案</h5>
                      <ul className='space-y-4'>
                        <button className={`${selectedPlan === 0 ? 'bg-primary-color text-white border-primary-color' : 'border-slate-300'} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`} onClick={() => setSelectedPlan(0)}>
                          <h5 className={`${selectedPlan === 0 ? 'text-white' : 'text-primary-color'} font-bold `}>星人之友</h5>
                          <div className='flex items-center gap-6'>
                            <h4 className='font-bold'><span className='mr-2 text-base font-normal'>NT$</span>600</h4>
                            <span className={`${selectedPlan === 0 ? 'text-slate-100' : 'text-slate-500'} text-sm`}>已有 9,957 人贊助</span>
                          </div>
                        </button>
                        <button className={`${selectedPlan === 1 ? 'bg-primary-color text-white border-primary-color' : 'border-slate-300'} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`} onClick={() => setSelectedPlan(1)}>
                          <h5 className={`${selectedPlan === 1 ? 'text-white' : 'text-primary-color'} font-bold `}>喵星大使</h5>
                          <div className='flex items-center gap-6'>
                            <h4 className='font-bold'><span className='mr-2 text-base font-normal'>NT$</span>6,000</h4>
                            <span className={`${selectedPlan === 1 ? 'text-slate-100' : 'text-slate-500'} text-sm`}>已有 2,000 人贊助</span>
                          </div>
                        </button>
                        <button className={`${selectedPlan === 2 ? 'bg-primary-color text-white border-primary-color' : 'border-slate-300'} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`} onClick={() => setSelectedPlan(2)}>
                          <h5 className={`${selectedPlan === 2 ? 'text-white' : 'text-primary-color'} font-bold `}>喵星傳奇</h5>
                          <div className='flex items-center gap-6'>
                            <h4 className='font-bold'><span className='mr-2 text-base font-normal'>NT$</span>60,00</h4>
                            <span className={`${selectedPlan === 2 ? 'text-slate-100' : 'text-slate-500'} text-sm`}>已有 999 人贊助</span>
                          </div>
                        </button>
                      </ul>
                      <button className='w-full py-5 text-base font-semibold text-white rounded-full bg-primary-color' onClick={handleDonate}>前往捐款</button>
                    </section>
                  )}
                </article>
                <Dialog.Close className="absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-6" onClick={handleDonateClose}>
                  <Cross2Icon />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          {/* <img src="../public/assets/images/small-donation.png" alt="small-donation" className='w-32 xl:w-56' /> */}
        </div>
      </div>
      <div id="service" className='bg-text-color sm:w-[640px] h-[80vw] sm:h-[38vw] lg:h-[36vw] flex flex-col justify-between px-12 py-16 sm:px-6 sm:py-10 lg:px-12 lg:py-16 xl:px-16 xl:py-20 rounded-3xl'>
        <div className='text-white'>
          <h1 className='lg:text-5.5xl whitespace-nowrap mb-4 lg:mb-8 font-MantouSans '>民眾服務信箱</h1>
          <h5>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</h5>
        </div>
        <div className='flex items-end justify-between'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className='flex items-center px-6 py-4 space-x-1 bg-white rounded-full'>
                <span className='text-base font-bold'>填寫表單</span>
                <img width="28" height="28" src="https://img.icons8.com/sf-regular-filled/48/right.png" alt="right-arrow" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 overflow-y-scroll h-full lg:h-min lg:overflow-y-hidden w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-5 sm:px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none">
                <Dialog.Title className="my-6 font-bold text-text-color">
                  <h3>民眾服務信箱</h3>
                </Dialog.Title>
                <article className='flex flex-col gap-10 lg:flex-row'>
                  <section className='w-full rounded-4xl bg-sky-100'>
                    <h1 className='px-10 pt-10 pb-4 font-bold leading-tight lg:pt-14 lg:px-14'>分享您的想法<br />一同為我們的未來打造更美好！</h1>
                    <img src="../public/assets/images/image 10.png" alt="small-donation" className='w-full mx-auto' />
                  </section>
                  {
                    isSubmitted ? (
                      <section className='flex flex-col items-center justify-center w-11/12 space-y-8'>
                        <h3 className='font-bold'>感謝您的意見</h3>
                        <img src="../public/assets/images/Group 15.png" alt="success" className='w-56' />
                        <Dialog.Close>
                          <button className='w-56 py-3 font-semibold rounded-full bg-slate-100 hover:bg-slate-200' onClick={() => setIsSubmitted(false)}>關閉</button>
                        </Dialog.Close>
                      </section>
                    ) : (
                      <section className='w-full space-y-8 lg:w-3/4'>
                        <Form.Root className="flex flex-col justify-between w-full h-full">
                          <div className='space-y-6'>
                            <Form.Field className="space-y-2" name="name">
                              <Form.Label className="text-xl font-bold">您的姓名</Form.Label>
                              <Form.Control asChild>
                                <input
                                  className="box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl"
                                  type="name"
                                  placeholder='姓名'
                                  required
                                />
                              </Form.Control>
                            </Form.Field>
                            <Form.Field className="space-y-2" name="email">
                              <Form.Label className="text-xl font-bold">Email</Form.Label>
                              <Form.Control asChild>
                                <input
                                  className="box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl"
                                  type="email"
                                  placeholder='email'
                                  required
                                />
                              </Form.Control>
                            </Form.Field>
                            <Form.Field className="space-y-2" name="phone">
                              <Form.Label className="text-xl font-bold">手機</Form.Label>
                              <Form.Control asChild>
                                <input
                                  className="box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl"
                                  type="phone"
                                  placeholder='手機號碼'
                                />
                              </Form.Control>
                            </Form.Field>
                            <Form.Field className="space-y-2" name="content">
                              <Form.Label className="text-xl font-bold">您的建言</Form.Label>
                              <Form.Control asChild>
                                <input
                                  className="box-border w-full h-40 pl-4 outline-none bg-slate-100 rounded-2xl"
                                  type="content"
                                  required
                                />
                              </Form.Control>
                            </Form.Field>
                          </div>
                          <Form.Submit asChild>
                            <button className='w-full py-5 mt-8 text-base font-semibold text-white rounded-full lg:mt-0 bg-primary-color' onClick={() => setIsSubmitted(true)}>送出意見</button>
                          </Form.Submit>
                        </Form.Root>
                      </section>
                    )
                  }
                </article>
                <Dialog.Close className="absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-6">
                  <Cross2Icon />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </article>
  )
}

export default SupportAndService