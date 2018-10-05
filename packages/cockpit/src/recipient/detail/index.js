import format from './formatAnticipationAndTransferConfig'

const DetailRecipient = client => recipientId => (
  client.recipients.find({ id: recipientId })
    .then(recipient => format(recipient))
)

export default DetailRecipient
