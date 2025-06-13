import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVolunteerNeedPost = () => {
    const {user} = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAddVolunteerNeed = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newVolunteerNeedData = Object.fromEntries(formData.entries());
        newVolunteerNeedData.noOfVolunteers = parseInt(newVolunteerNeedData.noOfVolunteers);
        //console.log(newVolunteerNeedData);

        axios.post('https://volunteer-management-server-tawny.vercel.app/addVolunteerNeedPost',newVolunteerNeedData)
        .then(res=>{
            if(res?.data.insertedId){
                console.log('after adding',res?.data);
                Swal.fire({
                title: "Volunteer needed post added successfully",
                icon: "success",
                draggable: true
                });
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <title>Volunteer Management | Add Volunteer Need Post</title>
            <div className='px-12 md:px-24 my-20'>
                <div className='p-12 space-y-4 text-center bg-base-300'>
                    <h3 className="text-2xl md:text-3xl font-semibold">Add Volunteer Need Post</h3>
                    <p className='font-medium italic'>Need Volunteers? Post It Here and Reach Willing Hearts.</p>

                    <form onSubmit={handleAddVolunteerNeed} className='fieldset'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Thumbnail</label>
                                <input type="text" name='thumbnail' className="input w-full" placeholder="Thumbnail" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Post Title</label>
                                <input type="text" name='title' className="input w-full" placeholder="Post Title" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Description</label>
                                {/* <input type="text" name='description' className="input w-full" placeholder="Description" /> */}
                                <textarea name='description' rows="3" className="textarea w-full" placeholder="Description"></textarea>
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Category</label>
                                <select defaultValue="Select a category" name='category' className="select w-full">
                                    <option disabled={true}>Select a category</option>
                                    <option value="healthcare">Health Care</option>
                                    <option value="education">Education</option>
                                    <option value="social service">Social Service</option>
                                    <option value="animal welfare">Animal Welfare</option>
                                </select>
                            </fieldset>
                            
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Location</label>
                                <input type="text" name='location' className="input w-full" placeholder="Location" />
                            </fieldset>
                            
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">No. of volunteers needed</label>
                                <input type="number" name='noOfVolunteers' className="input w-full" placeholder="No. of volunteers" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Deadline</label>
                                <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                name='deadline'
                                className='input w-full'
                                />
                            </fieldset>

                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Organizer Name</label>
                                <input type="text" name='oname' defaultValue={user.displayName} className="input w-full" placeholder="User Name" readOnly/>
                            </fieldset>

                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Organizer Email</label>
                                <input type="email" name='oemail' defaultValue={user.email} className="input w-full" placeholder="Email" readOnly />
                            </fieldset>
                            
                        </div>
                        <div className='p-4'>
                            <input type='submit' className='btn w-full btn-primary' value='Add Post'/>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    );
};

export default AddVolunteerNeedPost;