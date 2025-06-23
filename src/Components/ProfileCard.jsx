import React from 'react'

function ProfileCard(props) {
  return (
    <div className=' flex h-[300px]  w-[200px] border border-gray-700 m-5 rounded-xl justify-center '>
        <div className='  p-4 w-[200px] '>
            <div  className=' border border-gray-800 rounded-full  flex '>
                <img
                           src={props.logo} // Adjust the path to your logo
                           alt="logo"
                           className=" rounded-full " // Responsive logo size
                         />
             </div>
               <div  className='flex flex-col m-2 items-center '>
                  <h2 className='font-semibold text-xl'> {props.Name}</h2>
                  <h3 className='font-medium text-s'>{props.spec}</h3> 
                </div>
           
        </div>
    </div>
  )
}

export default ProfileCard