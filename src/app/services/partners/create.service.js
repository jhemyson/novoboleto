import Partner from '../../models/partner'

class CreatePartnerService {
  async run({ email, active = true }){

    return await Partner.create({ email, active })
  }
}

export default new CreatePartnerService()
