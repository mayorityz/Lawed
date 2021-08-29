export default class Orm {
  constructor(data, model) {
    console.log("initializing ...");
    this.data = data;
    this.model = model;
  }
  /**
   * Create
   */
  static async Create(data, model, fb) {
    try {
      await new model({ ...data }).save((err, doc) => {
        if (err) {
          fb({ status: false, message: err });
        } else {
          fb({ status: true, message: "user created Successfully" });
        }
      });
    } catch (error) {
      fb({ status: false, message: error.message });
    }
  }

  //   select all
  async Read(cb) {
    try {
      let query = await this.model.find({ ...this.data }, (err, data) => {
        if (err) {
          cb({ status: false, message: err.message });
        } else cb({ status: true, message: "success!", data });
      });
    } catch (error) {
      return error.message;
    }
  }

  async Update() {}

  async Delete() {}
}
