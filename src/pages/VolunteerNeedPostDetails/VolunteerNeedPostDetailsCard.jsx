import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BeVolunteerModal from './BeVolunteerModal';

const VolunteerNeedPostDetailsCard = ({postDetails,user}) => {
    const [details,setDetails] = useState(postDetails);
    const {_id,title,thumbnail,description,deadline,category,location,noOfVolunteers,oemail} = details;

    const handleVolunteer = e =>{
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const newVolunteerData = Object.fromEntries(formData);
            newVolunteerData.noOfVolunteers = parseInt(newVolunteerData.noOfVolunteers);
            newVolunteerData.postId = _id;
            //console.log(newVolunteerData);
    
            if(user?.email === oemail){
                toast.warn("You can't volunteer on your own post!");
                return;
            }
    
            if(noOfVolunteers <= 0){
                toast.error("No volunteers are needed for this post now!");
                return;
            }
            
            axios.post(`https://volunteer-management-server-tawny.vercel.app/volunteerRequest/${_id}`,newVolunteerData)
            .then(res=>{
                if(res?.data.insertedId){
                    console.log('after added',res?.data)
                    setDetails(prev=>{
                        return {...prev, noOfVolunteers:prev.noOfVolunteers-1};
                    })
                    toast.success("Your request has been submitted successfullly")
                }
            })
            .catch(error=>{
                console.log(error)
            })
        }

    return (
        <div>
            <div className='text-center space-y-3 mt-10'>
                <h2 className="text-2xl md:text-3xl font-bold">Post Details</h2>
                <p className="font-medium text-base md:text-lg italic">Explore the Cause. See How You Can Help.</p>
            </div>
            <div className="max-w-5xl mx-auto mt-10 mb-20">
                <div className="flex flex-col md:flex-row items-start justify-center bg-base-300 shadow-sm p-5 gap-5 rounded-2xl">
            <figure className='max-w-sm'>
                <img className='rounded-3xl object-cover'
                src={thumbnail}
                alt="Movie" />
            </figure>
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className='text-base font-normal'><span className='font-semibold'>Description:</span> {description}</p>
                <p className='text-base font-normal'><span className='font-semibold'>Deadline:</span> {deadline}</p>
                <p className='text-base font-normal'><span className='font-semibold'>Category:</span> {category}</p>
                <p className='text-base font-normal'><span className='font-semibold'>Location:</span> {location}</p>
                <p className='text-base font-normal'><span className='font-semibold'>No. of Volunteers needed:</span> {noOfVolunteers}</p>
                <p className='text-red-500 font-bold'>
                    {noOfVolunteers <= 0 && 'No volunteers are required now!'}
                </p>
                
                <div className="card-actions">
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn bg-[#2dcfc4] text-white rounded-xl">Be a Volunteer</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle px-1">
                    <BeVolunteerModal details={details} handleVolunteer={handleVolunteer} user={user}/>
                    </dialog>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default VolunteerNeedPostDetailsCard;