export default class Result {
  constructor(message, success, data, errors){
    this.message = message;
    this.success = success;
    this.data = data;
    this.errors = errors
  }

  success(response){
    return response.json({
      message: this.message,
      success: this.success,
      data: this.data,
      errors: this.errors
    })
  }

  unsuccess(response, status_code){
      return response.status(status_code).json({
        message: this.message,
        success: this.success,
        data: this.data,
        errors: this.errors
      })
  }
}
