import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import eventsData from '../data/eventsData.json';

const Events: React.FC = () => {
  return (
    <section id="event" className='py-16 px-[4vw] lg:py-26 lg:px-[8.5vw]'>
      <p className='w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color'>LATEST EVENTS</p>
      <h1 className='text-5.5xl lg:text-6xl text-center gradient-text'>最新活動</h1>
      <article className='flex flex-col justify-center gap-6 mt-10 lg:flex-row lg:mt-16'>
        <div className='flex flex-col justify-between'>
          <img src="assets/images/event-1.jpeg" alt="event1" className='object-cover w-full h-[480px] rounded-2xl' />
          <div className='mt-4'>
            <p className='text-sm text-slate-500'>2023/12/26</p>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <h5 className='my-2 font-bold cursor-pointer hover:text-text-color/80'>參與台北寵物論壇，爭取貓咪友善環境</h5>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none">
                  <Dialog.Title className="my-6 font-bold text-text-color">
                    <h3>最新活動</h3>
                  </Dialog.Title>
                  <article className='flex flex-col gap-8 lg:flex-row'>
                    <section>
                      <img src="assets/images/event-1.jpeg" alt="event1" className='object-cover w-full lg:min-w-[450px] h-[450px] lg:h-80 rounded-2xl' />
                      <p className='mt-4 mb-2 text-sm'>參與台北寵物論壇，爭取貓咪友善環境</p>
                      <div className='flex items-center space-x-4'>
                        <p>分享</p>
                        <button><img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png" alt="facebook" /></button>
                        <button><img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png" alt="instagram" /></button>
                        <button><img width="28" height="28" src="https://img.icons8.com/fluency-systems-filled/50/DA7D4A/line-me.png" alt="line" /></button>
                        <button><img width="28" height="28" src="https://img.icons8.com/fluency-systems-filled/50/DA7D4A/twitter.png" alt="twitter" /></button>
                      </div>
                    </section>
                    <section className='w-full'>
                      <div className='mb-10 space-y-2'>
                        <h2 className='font-bold text-primary-color'>參與台北寵物論壇，爭取貓咪友善環境</h2>
                        <p className='text-sm text-slate-500'>2023/12/26</p>
                      </div>
                      <p className='mb-20 text-base'>台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。
                        <br /><br />
                        在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。
                        <br /><br />
                        喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。
                        <br /><br />
                        為了實現這一目標，喵力翰提出了一系列具體的政策建議。
                        首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。
                        <br /><br />
                        在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。
                        <br /><br />
                        此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。
                        他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。
                        <br /><br />
                        這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。
                      </p>
                      <div className='p-4 bg-text-color-secondary/10 rounded-xl'>
                        <p className='mb-4 font-semibold'>更多活動</p>
                        <div className='flex space-x-4'>
                          <div className='space-y-3 w-60'>
                            <img src="assets/images/event-2.jpeg" alt="event2" className='object-cover w-64 h-36 rounded-2xl' />
                            <p>掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                          </div>
                          <div className='space-y-3 w-60'>
                            <img src="assets/images/event-3.jpeg" alt="event3" className='object-cover w-64 h-36 rounded-2xl' />
                            <p>收容所模特兒大比拼！</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </article>
                  <Dialog.Close className="absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8">
                    <Cross2Icon />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <p className='text-base'>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <ul className='mb-6 space-y-6'>
            {
              eventsData.map((event, index) => (
                <li key={index} className='flex gap-4'>
                  <img src={event.imageUrl} alt={event.title} className='object-cover w-64 h-36 rounded-2xl' />
                  <div>
                    <p className='text-sm text-slate-500'>{event.date}</p>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <h5 className='my-2 font-bold cursor-pointer hover:text-text-color/80'>{event.title}</h5>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none">
                          <Dialog.Title className="my-6 font-bold text-text-color">
                            <h3>最新活動</h3>
                          </Dialog.Title>
                          <article className='flex flex-col gap-8 lg:flex-row'>
                            <section>
                              <img src={event.imageUrl} alt="event1" className='object-cover w-full lg:min-w-[450px] h-[450px] lg:h-80 rounded-2xl' />
                              <p className='mt-4 mb-2 text-sm'>{event.title}</p>
                              <div className='flex items-center space-x-4'>
                                <p>分享</p>
                                <button><img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png" alt="facebook" /></button>
                                <button><img width="28" height="28" src="https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png" alt="instagram" /></button>
                                <button><img width="28" height="28" src="https://img.icons8.com/fluency-systems-filled/50/DA7D4A/line-me.png" alt="line" /></button>
                                <button><img width="28" height="28" src="https://img.icons8.com/fluency-systems-filled/50/DA7D4A/twitter.png" alt="twitter" /></button>
                              </div>
                            </section>
                            <section className='w-full'>
                              <div className='mb-10 space-y-2'>
                                <h2 className='font-bold text-primary-color'>{event.title}</h2>
                                <p className='text-sm text-slate-500'>{event.date}</p>
                              </div>
                              <p className='mb-20 text-base whitespace-pre-line'>{event.content}</p>
                              <div className='p-4 bg-text-color-secondary/10 rounded-xl'>
                                <p className='mb-4 font-semibold'>更多活動</p>
                                <div className='flex space-x-4'>
                                  {eventsData
                                    .filter((_otherEvent, otherIndex) => otherIndex !== index)
                                    .map((otherEvent, otherIndex) => (
                                      <div key={otherIndex} className='space-y-3 w-60'>
                                        <img src={otherEvent.imageUrl} alt={`event${otherIndex + 2}`} className='object-cover w-64 h-36 rounded-2xl' />
                                        <p>{otherEvent.title}</p>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </section>
                          </article>
                          <Dialog.Close className="absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8">
                            <Cross2Icon />
                          </Dialog.Close>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                    <p className='text-base'>{event.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>
          <button className='flex items-center justify-center py-4 space-x-1 rounded-full w-36 bg-slate-100'>
            <span className='text-base font-bold'>查看更多</span>
            <img width="28" height="28" src="https://img.icons8.com/sf-regular-filled/48/right.png" alt="right-arrow" />
          </button>
        </div>
      </article>
    </section>
  )
}

export default Events
