import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData} from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const VolunteerNeedPostDetails = () => {
    const {user} = useAuth()
    const postDetails = useLoaderData();
    const [details,setDetails] = useState(postDetails);
    const {_id,title,thumbnail,description,deadline,category,location,noOfVolunteers,oname,oemail} = details;


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

        if(noOfVolunteers===0){
            toast.error("No volunteers are needed for this post now!");
            return;
        }
        
        axios.post(`http://localhost:5000/volunteerRequest/${_id}`,newVolunteerData)
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
        <>
        <title>Volunteer Management | Volunteer Need Post Details</title>
        <div className='max-w-7xl mx-auto my-20'>
            <div className="card card-side gap-5 bg-base-200 shadow-md p-4">
            <figure>
                <img
                src={thumbnail}
                alt="Movie" />
            </figure>
            <div className="space-y-3 my-3">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className='text-base font-normal'>Description: {description}</p>
                <p className='text-base font-normal'>Deadline: {deadline}</p>
                <p className='text-base font-normal'>Category: {category}</p>
                <p className='text-base font-normal'>Location: {location}</p>
                <p className='text-base font-normal'>No. of Volunteers: {noOfVolunteers}</p>
                
                <div className="card-actions">
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Be a Volunteer</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl text-center">Be a Volunteer!</h3>
                        <div className="modal-action">
                        <form onSubmit={handleVolunteer} className='fieldset'>
                            <legend className="fieldset-legend">Post details</legend>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Thumbnail</label>
                                    <input type="text" name='thumbnail'
                                    defaultValue={thumbnail} className="input w-full" placeholder="Thumbnail" readOnly />
                                </fieldset>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Post Title</label>
                                    <input type="text" name='title'
                                    defaultValue={title} className="input w-full" placeholder="Post Title" readOnly />
                                </fieldset>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Description</label>
                                    <textarea name='description'
                                    defaultValue={description} rows="3" className="textarea w-full" placeholder="Description"
                                    readOnly></textarea>
                                </fieldset>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Category</label>
                                    <input
                                    type="text"
                                    name="category"
                                    defaultValue={category}
                                    readOnly
                                    className="input w-full bg-gray-100 cursor-not-allowed"
                                    />
                                </fieldset>
                                                        
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Location</label>
                                    <input type="text" name='location' 
                                    defaultValue={location} className="input w-full" placeholder="Location" 
                                    readOnly/>
                                </fieldset>
                                
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">No. of volunteers needed</label>
                                    <input type="number" name='noOfVolunteers'
                                    value={noOfVolunteers} className="input w-full" placeholder="No. of volunteers" 
                                    readOnly/>
                                </fieldset>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Deadline</label>
                                    <DatePicker
                                    value={deadline}
                                    name='deadline'
                                    className='input w-full'
                                    readOnly
                                    />
                                </fieldset>
                            
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Organizer Name</label>
                                    <input type="text" name='oname' defaultValue={oname} className="input w-full" placeholder="User Name" readOnly/>
                                </fieldset>
                            
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Organizer Email</label>
                                    <input type="email" name='oemail' 
                                    defaultValue={oemail} className="input w-full" placeholder="Email" readOnly />
                                </fieldset>
                            </div>
                            <legend className="fieldset-legend">Volunteer details</legend>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Volunteer Name</label>
                                    <input type="text" name='vname' defaultValue={user?.displayName} className="input w-full" placeholder="Volunteer Name" readOnly/>
                                </fieldset>
                            
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Volunteer Email</label>
                                    <input type="email" name='vemail' 
                                    defaultValue={user?.email} className="input w-full" placeholder="Volunteer Email" readOnly />
                                </fieldset>
                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Suggestion</label>
                                    <textarea name='suggestion'
                                    rows="3" className="textarea w-full" placeholder="Suggestion"
                                    ></textarea>
                                </fieldset>

                                <fieldset className='fieldset rounded-box p-4'>
                                    <label className="label">Status</label>
                                    <select name="status" defaultValue="requested" className="select w-full">
                                    <option value="requested">Requested</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                    </select>

                                </fieldset>

                            </div>
                            <div className='p-4'>
                                <input type='submit' className='btn w-full btn-primary' value='Request'/>
                            </div>
                            <button type='button' className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
            </div>
        </div>
        </>
        
    );
};

export default VolunteerNeedPostDetails;