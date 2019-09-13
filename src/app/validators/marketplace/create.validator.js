import yup from 'yup'
import Result from '../../common/result'

export default async (req, res, next) => {
  try {
    const body = yup.object().shape({
      number: yup.string().required()
    })

    await body.validate(req.body, { abortEarly: false });

    return next()
  } catch(error){
    const result = new Result('Erro de validação', false, null, error.inner)
    return result.unsuccess(res, 400)
  }
}
