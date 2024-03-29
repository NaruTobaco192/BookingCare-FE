import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId })
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
const editUserService = (inputData) => {
    {
        return axios.put('/api/edit-user', inputData);
    }
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailInfoDoctorService = (data) => {
    return axios.post('/api/save-info-doctors', data)
}
const getDetailInfoDoctor = (inputId) => {
    return axios.get(`/api/get-detail-info-doctors-byId?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}
const getExtraDoctorInfoById = (doctorId) => {
    return axios.get(`/api/get-extra-info-doctor-by-id?id=${doctorId}`)
}
const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?id=${doctorId}`)
}
const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}
const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}
const createNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)
}
const getAllSpecialty = () => {
    return axios.get(`/api/get-all-specialty`)
}
const getAllDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`)
}
const createNewClinic = (data) => {
    return axios.post('/api/create-new-clinic', data)
}
const getAllClinic = () => {
    return axios.get(`/api/get-all-clinic`)
}
const getAllDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`)
}
const getListPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`)
}
const createNewHandbook = (data) => {
    return axios.post('/api/create-new-handbook', data)
}
const getAllHandbook = () => {
    return axios.get(`/api/get-all-handbook`)
}
const getAllDetailHandbookById = (data) => {
    return axios.get(`/api/get-detail-handbook-by-id?id=${data.id}`)
}
const postPrescription = (data) => {
    return axios.post('/api/send-prescription', data)
}
export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors,
    saveDetailInfoDoctorService, getDetailInfoDoctor,
    saveBulkScheduleDoctor, getScheduleDoctorByDate,
    getExtraDoctorInfoById, getProfileDoctorById,
    postPatientBookAppointment, postVerifyBookAppointment,
    createNewSpecialty, getAllSpecialty,
    getAllDetailSpecialtyById, createNewClinic,
    getAllClinic, getAllDetailClinicById,
    getListPatientForDoctor, createNewHandbook,
    getAllHandbook, getAllDetailHandbookById,
    postPrescription
}

