class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  //CREATE - DATA
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw error;
    }
  }
}



export default CrudRepository;

