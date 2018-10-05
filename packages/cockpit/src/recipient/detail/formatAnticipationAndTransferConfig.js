function formatAnTConfig (data) {
  // const { documentType } = data.identification
  console.log('infoData', data.register_information)

  const companyData = {
    name: data.register_information.company_name,
    id: '12345678',
    status: 'Ativo',
    createDate: data.data_created,
    hash: data.id,
  }

  return {
    companyData,
  }
}

export default formatAnTConfig
