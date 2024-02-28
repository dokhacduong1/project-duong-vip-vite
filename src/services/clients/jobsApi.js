import { Get, Post } from "../../utils/clients/request"

export const getListJobs = async () => {
    const result = await Get("/jobs");
    return result;
}

export const getListJobsFeatured = async (page = 1, select = "") => {
    const result = await Get(`/jobs?page=${page}&limit=8&featured=true&selectItem=${select}`);
    return result;
}


export const getListJobsSalarys = async (page = 1, select = "") => {
    const result = await Get(`/jobs?page=${page}&limit=8&salaryKey=gt&salaryValue=1000&sortKey=salary&sortValue=desc&selectItem=${select}`);
    return result;
}

export const getListJobsLevels = async (page = 1, select = "") => {
    const result = await Get(`/jobs?page=${page}&limit=8&jobLevel=Intern&sortKey=salary&sortValue=desc&selectItem=${select}`);
    return result;
}

export const getListJobsOccupation = async (CategoriesKey, page = 1, select = "") => {
    const result = await Get(`/jobs?page=${page}&limit=3&jobCategoriesKey=${CategoriesKey}&selectItem=${select}`);
    return result;
}
export const getJobSearch = async (slug = "") => {
    const result = await Get(`/jobs/search-job/${slug}`);
    return result;
}
export const getJobByCategoriesCorresponding = async (listId = []) => {
    const result = await Post(`/jobs/job-by-categories`, listId);
    return result;
}
export const getJobSearchPosition = async (value) => {
    const result = await Get(`/jobs/search-position?keyword=${value}`);
    return result;
}
export const getJobAdvancedSearch = async (page = 1, limit = 10, sort_key = "createdAt", sort_value = "desc", keyword = "", job_categorie = "", job_type = "", job_level = "", salary_min = "", salary_max = "",select="") => {
    const result = await Get(`/jobs/advanced-search?page=${page}&limit= ${limit}&sort_key=${sort_key}&sort_value=${sort_value}&keyword=${keyword}&job_categories=${job_categorie}&job_type=${job_type}&job_level=${job_level}&salary_min=${salary_min}&salary_max=${salary_max}&selectItem=${select}`);
    return result;
}
export const getMayBeInterested = async (value) => {
    const result = await Post(`/jobs/may-be-interested`, value);
    return result;
}