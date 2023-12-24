import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import issuesData from '../data/issuesData.json';


const Issues: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <article id="issue" className='py-16 lg:py-26 '>
      <p className='w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color'>POLICY ISSUES</p>
      <h1 className='text-5.5xl lg:text-6xl text-center gradient-text'>政策議題</h1>
      <section className='flex flex-row flex-wrap justify-center gap-8 px-4 mt-20 mb-6 lg:mt-16'>
        {
          issuesData.map((issue, index) => (
            <div key={index}>
              <h4 className='mb-3 font-medium text-center whitespace-pre-line md:text-left'>{issue.title}</h4>
              <img src={issue.imageUrl} alt={issue.title} className='object-cover w-full cursor-pointer md:h-72 md:w-96 rounded-4xl' onClick={() => setIsOpen(true)} />
              <Dialog.Root open={isOpen} onOpenChange={(open) => !open && setIsOpen(false)}>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none">
                    <Dialog.Title className="my-6 font-bold text-text-color">
                      <h3>政策議題</h3>
                    </Dialog.Title>
                    <article className='flex flex-col gap-8 lg:flex-row'>
                      <section>
                        <img src={issue.imageUrl} alt="event1" className='object-contain w-96 lg:w-full lg:min-w-[450px] rounded-2xl' />
                        <p className='mt-4 mb-2 text-sm'>{issue.title}</p>
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
                          <h2 className='font-bold text-primary-color'>{issue.title}</h2>
                        </div>
                        <p className='mb-20 text-base whitespace-pre-line'>
                          {issue.content.split('\n').map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                              {line.includes("寵物醫療基金") && <strong>{line}</strong>}
                              {line.includes("提供醫療補助") && <strong>{line}</strong>}
                              {line.includes("合作動物醫院") && <strong>{line}</strong>}
                              {!line.includes("寵物醫療基金") && !line.includes("提供醫療補助") && !line.includes("合作動物醫院") && line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                        <div className='p-4 bg-text-color-secondary/10 rounded-xl'>
                          <p className='mb-4 font-semibold'>更多政策議題</p>
                          <div className='flex space-x-4'>
                            {issuesData
                              .filter((_otherIssue, otherIndex) => otherIndex !== index)
                              .map((otherIssue, otherIndex) => (
                                <div className='space-y-3 w-60' key={otherIndex}>
                                  <img src={otherIssue.imageUrl} alt={`event${otherIndex + 2}`} className='object-cover w-64 h-36 rounded-2xl' />
                                  <p>{otherIssue.title}</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      </section>
                    </article>
                    <Cross2Icon className="absolute w-8 h-8 p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8" onClick={() => setIsOpen(false)} />
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          ))
        }
      </section>
    </article >
  )
}

export default Issues
