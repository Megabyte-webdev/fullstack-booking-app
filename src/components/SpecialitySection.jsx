import { Link } from "react-router-dom"
import { specialityData } from "../assets/assets_frontend/assets"
import Heading from "./Heading"
const SpecialitySection = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
        <Heading
        title="Find by Speciality"
        subTitle="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." />
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
            {
                specialityData.map((item, index)=>(
                    <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
                        <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>    
    </div>
  )
}

export default SpecialitySection