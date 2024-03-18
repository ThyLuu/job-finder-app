import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import logo1 from '../../Assets/Logo (1).png'
import logo2 from '../../Assets/Logo (2).png'
import logo3 from '../../Assets/Logo (3).png'
import logo4 from '../../Assets/Logo (4).png'
import logo5 from '../../Assets/Logo (5).png'
import logo6 from '../../Assets/Logo (6).png'
import logo7 from '../../Assets/Logo (7).png'
import logo8 from '../../Assets/Logo (8).png'

const data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Develop & maintain web apps using various languages & framework.',
        company: 'Line Corporation'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI/UX Designer',
        time: '14Hrs',
        location: 'Manchester',
        desc: 'Craft user interfaces and user experiences that are both visually appealing and intuitive to use.',
        company: 'Apple Inc'
    },
    {
        id: 3,
        image: logo3,
        title: 'Software Engineer',
        time: '9Hrs',
        location: 'Australia',
        desc: 'Design, develop, test, and deploy software systems that meet specific requirements.',
        company: 'Huawei'
    },
    {
        id: 4,
        image: logo4,
        title: 'Product Designer',
        time: '3 Days',
        location: 'Florida',
        desc: 'Conceptualize, design, and iterate on physical or digital products to enhance user experience.',
        company: 'Accusoft'
    },
    {
        id: 5,
        image: logo5,
        title: 'Lead Developer',
        time: '12 Days',
        location: 'Singapore',
        desc: 'Provide technical leadership & mentor devs for efficient development.',
        company: 'TheGameLop'
    },
    {
        id: 6,
        image: logo6,
        title: 'Data Science',
        time: '12 Days',
        location: 'Norway',
        desc: 'Extract, analyze, and interpret data to uncover meaningful insights and inform business decisions.',
        company: 'VKontakte'
    },
    {
        id: 7,
        image: logo7,
        title: 'Game Tester',
        time: '23Hrs',
        location: 'Viet Nam',
        desc: 'Conduct thorough game testing to ensure quality and provide detailed feedback.',
        company: 'GameLoft'
    },
    {
        id: 8,
        image: logo8,
        title: 'Graphic Design',
        time: '10 Days',
        location: 'California',
        desc: 'Create visually engaging graphic elements for marketing materials, websites, and other media.',
        company: 'Electronic Arts'
    },
]

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">

                {
                    data.map(({ id, image, title, time, location, desc, company }) => {
                        return (
                            <div key={id} className="group group/items singleJob w-[270px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg" >
                                <span className='flex justify-between items-center gap-4 '>
                                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white '>{title}</h1>
                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        <BiTimeFive /> {time}
                                    </span>
                                </span>

                                <h6 className='text-[#ccc]'>{location}</h6>

                                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                    {desc}
                                </p>

                                <div className='company flex items-center gap-2'>
                                    <img src={image} alt="Company logo" className='w-[10%]' />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                                </div>

                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/items:text-textColor group-hover:text-white'>
                                    Apply Now
                                </button>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Jobs
