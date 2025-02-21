"use client"
import axios from "axios";
import { Loader2Icon, XIcon } from "lucide-react";
import { useState } from "react";

const JobApplicationForm = ({ jobTitle }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState("");
    const [url, setUrl] = useState("");
    const [experiences, setExperiences] = useState([1]);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [fileError, setFileError] = useState("");
    const [messageStatus, setMessageStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleNameChange = (event) => {
        setName(event.target.value);
        if (event.target.value.trim()) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors.name;
                return newErrors;
            });
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (event.target.value.trim()) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors.email;
                return newErrors;
            });
        }
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
        if (event.target.value.trim()) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors.number;
                return newErrors;
            });
        }
    };

    const addExperience = () => {
        setExperiences([...experiences, {}]);
    };

    const removeExperience = (indexToRemove) => {
        setExperiences(experiences.filter((_, index) => index !== indexToRemove));
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setSelectedFileName(file.name);
            setErrors({ ...errors, selectedFileName: '' });
        } else {
            setErrors({ ...errors, selectedFileName: 'Invalid file type. Please select a .docx or .pdf file.' });
        }
    };

    const validateFormData = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        }
        if (!number.trim()) {
            newErrors.number = "Number is required.";
        }
        if (!selectedFileName) {
            newErrors.selectedFileName = "Please upload your resume.";
        }
        return newErrors;
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setNumber("");
        setLocation("");
        setUrl("");
        setExperiences([]);
        setSelectedFileName("");
        setFileError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the form data
        const formErrors = validateFormData();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        } else {
            setErrors({});
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('number', number);
        formData.append('location', location);
        formData.append('url', url);
        formData.append('jobTitle', jobTitle);

        formData.append('experiences', JSON.stringify(experiences.map((_, index) => {
            const years = parseInt(event.target[`years_${index}`].value) || 0;
            const months = parseInt(event.target[`months_${index}`].value) || 0;
            const jobTitle = event.target[`jobTitle_${index}`].value;
            const company = event.target[`company_${index}`].value;
            return { jobTitle, company, years, months };
        })));

        if (event.target['careerCV'].files[0]) {
            formData.append('careerCV', event.target['careerCV'].files[0]);
        }

        try {
            const response = await axios.post("/api/jobDetailForm", formData);

            if (response.status === 200) {
                setMessageStatus('success');
                resetForm();
            } else {
                setMessageStatus('error');
                console.error("Failed to send form data");
            }
        } catch (error) {
            console.error("Error sending form data:", error);
            setMessageStatus('error');
        } finally {
            setIsLoading(false);
            setTimeout(() => setMessageStatus(null), 5000);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="text-left">
                <div className="mb-10">
                    <h4 className="text-3xl font-medium mb-5">
                        Personal Information
                    </h4>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="text-xl mb-2">Full Name*</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={handleNameChange}
                            className={` bg-white font-body text-xl px-4 py-3 rounded-md focus:ring-2 ring-primary duration-300 ${errors.name ? 'border-red-400 border ring-red-500' : ''}`}
                        />
                        {errors.name && <p className=" text-red-500 font-medium text-md mt-2">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="text-xl mb-2">Email*</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleEmailChange}
                            className={` bg-white font-body text-xl px-4 py-3 rounded-md focus:ring-2 ring-primary duration-300 ${errors.email ? 'border-red-400 border ring-red-500' : ''}`}
                        />
                        {errors.email && <p className=" text-red-500 font-medium text-md mt-2">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="number" className="text-xl mb-2">Mobile*</label>
                        <input
                            id="number"
                            type="tel"
                            name="number"
                            value={number}
                            placeholder="Number"
                            onChange={handleNumberChange}
                            className={` bg-white font-body text-xl px-4 py-3 rounded-md focus:ring-2 ring-primary duration-300 ${errors.number ? 'border-red-400 border ring-red-500' : ''}`}
                        />
                        {errors.number && <p className=" text-red-500 font-medium text-md mt-2">{errors.number}</p>}
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="location" className="text-xl mb-2">Location</label>
                        <input id="location" type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className=" bg-white font-body text-xl px-4 py-3 rounded-md focus:ring-2 ring-primary duration-300" />
                    </div>

                </div>

                <div className="font-body mb-10">
                    <h4 className="text-3xl font-medium mb-5">
                        Portfolio URL (optional)
                    </h4>
                    <div className="flex flex-col">
                        <label htmlFor="url" className="text-xl mb-2">URL (LinkedIn, Behance, Dribble)</label>
                        <input id="url" type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Portfolio URL" className=" bg-white read-only:bg-gray-500 font-body text-xl px-4 py-3 rounded-md focus:ring-2 ring-primary duration-300" />
                    </div>
                </div>

                <div className="font-body mb-10">
                    <h4 className="text-3xl font-medium mb-5">
                        Experience Details
                    </h4>
                    {experiences.map((_, index) => (
                        <div key={index} className="experience-input mb-4 bg-white relative shadow-lg p-3 rounded-lg grid grid-cols-2 gap-3 mr-8 mobile:grid-cols-1">
                            <input aria-label="job title" type="text" name={`jobTitle_${index}`} placeholder="Job Title" className="border dark:bg-white border-gray font-body text-xl px-4 py-2 rounded-sm focus:ring-2 ring-primary duration-300" />
                            <input aria-label="company name" type="text" name={`company_${index}`} placeholder="Company" className=" border dark:bg-white border-gray font-body text-xl px-4 py-2 rounded-sm focus:ring-2 ring-primary duration-300" />
                            <input aria-label="number of years" type="number" name={`years_${index}`} placeholder="Years" className=" border dark:bg-white border-gray font-body text-xl px-4 py-2 rounded-sm focus:ring-2 ring-primary duration-300" />
                            <input aria-label="number of months" type="number" min="0" max="12" name={`months_${index}`} placeholder="Months" className="dark:bg-white border-gray out-of-range:border-red-400 out-of-range:ring-red-500 border font-body text-xl px-4 py-2 rounded-sm focus:ring-2 ring-primary duration-300" />

                            <button type="button" onClick={() => removeExperience(index)} className="absolute top-2 right-[-3rem] text-2xl text-black mobile:-right-10">
                                <XIcon className="tablet:w-8 tablet:h-8" />
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addExperience} className="text-primary text-2xl font-medium py-2 rounded-md ">Add Experience + </button>
                </div>

                <div className="font-body mb-16">
                    <h4 className="text-3xl font-medium mb-5">
                        Attachment Details
                    </h4>
                    <div className="flex flex-col mb-5">
                        <p className="text-xl mb-2">Only .docx or .pdf files are allowed. Max file size is 10 MBs</p>
                        <label htmlFor="careerCV" className={` bg-white flex flex-col items-start justify-center w-full h-32 border border-primary border-dashed rounded-lg cursor-pointer ${errors.selectedFileName ? 'border-red-400' : ''}`}>
                            <div className="flex flex-col items-start justify-center py-4 px-5">
                                <svg className="w-10 h-10 text-primary " stroke="currentColor" fill="none" viewBox="0 0 55 43" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99896 6.82256L13.5247 5.53845V32.7692L10.9976 33.3139C7.69143 34.0265 4.44992 31.867 3.83386 28.5415L1.10852 13.83C0.49886 10.539 2.69967 7.38551 5.99896 6.82256Z" strokeWidth="2" />
                                    <path d="M49.001 6.82256L41.4753 5.53845V32.7692L44.0024 33.3139C47.3086 34.0265 50.5501 31.867 51.1661 28.5415L53.8915 13.83C54.5011 10.539 52.3003 7.38551 49.001 6.82256Z" strokeWidth="2" />
                                    <g filter="url(#filter0_dd_25_3290)">
                                        <rect x="12.6226" width="29.7544" height="36" rx="6" />
                                        <rect x="13.6226" y="1" width="27.7544" height="34" rx="5" strokeWidth="2" />
                                    </g>
                                    <path d="M36.3769 35H18.6226C15.8611 35 13.6226 32.7614 13.6226 30V28.4605L12.8873 27.7827L13.6226 28.4605L23.1497 18.1243L30.2892 26.5354C31.0913 27.4804 32.5509 27.4757 33.347 26.5257L37.1281 22.0133L41.3769 26.6939V30C41.3769 32.7614 39.1384 35 36.3769 35Z" strokeWidth="2" />
                                    <path d="M34.1646 11.5384C34.1646 13.3025 32.7738 14.6922 31.1072 14.6922C29.4407 14.6922 28.0498 13.3025 28.0498 11.5384C28.0498 9.77427 29.4407 8.38452 31.1072 8.38452C32.7738 8.38452 34.1646 9.77427 34.1646 11.5384Z" strokeWidth="2" />
                                    <defs>
                                        <filter id="filter0_dd_25_3290" x="9.62256" y="0" width="35.7544" height="43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="2" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_3290" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="1.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow_25_3290" result="effect2_dropShadow_25_3290" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_3290" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <p className="text-xl text-gray2">Upload Resume / Portfolio File</p>
                            </div>
                            <input id="careerCV" name="careerCV" type="file" accept=".pdf,.docx" className="hidden" onChange={onFileChange} />
                        </label>
                        {selectedFileName ? (
                            <p className="text-black mt-2 ml-1 font-medium text-lg">{selectedFileName}</p>
                        ) : (
                            <p className="text-gray2 mt-2 ml-1 font-medium text-lg">No File Chosen</p>
                        )}
                        {fileError && (
                            <p className=" text-red-500 font-medium text-md mt-2">{fileError}</p>
                        )}
                        {errors.selectedFileName && (
                            <p className=" text-red-500 font-medium text-md mt-2">{errors.selectedFileName}</p>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    {Object.keys(errors).length > 0 && (
                        <p className=" text-red-500 font-medium text-lg mb-4">Please fill in all the required details.</p>
                    )}
                    {isLoading ? (
                        <button className="bg-primary h-14 w-56 shadow-lg rounded-full" disabled>
                            <Loader2Icon className="animate-spin mx-auto w-8 h-8 tablet:h-[4vw] tablet:w-[4vw] mobile:w-[6vw] mobile:h-[6vw] text-white dark:text-black" />
                        </button>
                    ) : (
                        <button type="submit" className="tw-primary hover:bg-primary hover:shadow-lg duration-300 hover:text-white dark:hover:text-black border-primary border-2 rounded-full h-14 w-56">
                            <span className="flex gap-4 items-center justify-center font-medium text-2xl font-body">
                                Submit
                                <span>
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <g id="style=stroke">
                                            <g id="arrow-long-right">
                                                <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z" />
                                                <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </button>
                    )}
                    {messageStatus === 'success' && (
                        <p className=" text-green-500 mt-4 font-medium text-xl">Thank you, your details have been submitted. We will get back to you in 2-3 days.</p>
                    )}
                    {messageStatus === 'error' && (
                        <p className=" text-red-500 font-medium mt-4 text-xl">Failed to send the message. Please try again later.</p>
                    )}
                </div>
            </form>
        </>
    )
}

export default JobApplicationForm;