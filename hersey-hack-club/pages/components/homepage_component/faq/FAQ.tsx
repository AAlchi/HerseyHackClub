import React from 'react'   
import FAQBlock from '../../global/faq/FAQBlock'

const FAQ = () => {
  return (
    <div className='flex justify-center bg-slate-700 py-10'>
    <div className='text-white bg-blue-850 py-10 lg:md:px-20 w-full px-5 justify-center items-center flex-col flex' style={{maxWidth: "1500px"}}>
        <div className='items-start flex flex-col w-full'>
            <h1 className='text-3xl font-extrabold pb-3'>Frequently Asked Questions</h1>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
        </div> 
        <div className='flex gap-3 w-full flex-col items-center justify-center pt-10'>
            <FAQBlock question="Do I need any experience coding?" answer="Nope. All skill levels are welcome and we will guide you though the workshops."/>
            <FAQBlock question="When is Hack Club?" answer="Evey Friday from 3:10 to 4pm."/>
            <FAQBlock question="What projects do we build?" answer="The workshops are different every time. They are posted in the discord server every Tuesday so you'll be able to see if it's a workshop that interests you."/>  

        </div>
    </div>
    </div>
  )
}

export default FAQ