export default class Result {
  constructor(response ,message, success, data, errors){
    this.response = response;
    this.message = message;
    this.success = success;
    this.data = data;
    this.errors = errors
  }

  success(){
    return this.response.json({
      message: this.message,
      success: this.success,
      data: this.data,
      errors: this.errors
    })
  }

  unsuccess(status_code){
      return this.response.status(status_code).json({
        message: this.message,
        success: this.success,
        data: this.data,
        errors: this.errors
      })
  }
}
