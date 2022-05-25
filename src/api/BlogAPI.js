import $api, {$apiFile} from "../http/http";

export const BlogAPI = {
    async getBlogs() {
        return $api.get('blogs');
    },

    async deleteBlog(id) {
        return $api.delete(`blogs/${id}`);
    },

    async addBlog(formData) {
        return $apiFile.post("blog", formData);
    },

    async updateBlog(formData, id) {
        return $apiFile.put(`blogs/${id}`, formData);
    }
}
