import React from 'react';
import DatePicker from 'react-datepicker';

const BeVolunteerModal = ({details,handleVolunteer,user}) => {
    const {title,thumbnail,description,deadline,category,location,noOfVolunteers,oname,oemail} = details;

    return (
        <div className="modal-box">
            <h3 className="font-bold text-2xl text-center">Be a Volunteer!</h3>
            <div className="modal-action">
            <form onSubmit={handleVolunteer} className='fieldset'>
            <legend className="fieldset-legend text-base font-medium">Post details</legend>
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
            <legend className="fieldset-legend text-base font-medium">Volunteer details</legend>
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
                 <input type='submit' className='btn w-full bg-[#2dcfc4] text-white rounded-xl' value='Request'/>
             </div>
             <button type='button' className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
            </form>
            </div>
        </div>
    );
};

export default BeVolunteerModal;