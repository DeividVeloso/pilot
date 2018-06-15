import buildResult from './result'
import requestResultMock from './transactionsMock.json'

const query = {
  search: '12345',
  dates: {
    start: new Date(),
    end: new Date(),
  },
  filters: {
    payment_method: ['credit_card', 'debit_card'],
    status: ['paid'],
  },
  offset: 2,
  count: 20,
  aggregations: {
    total_amount: {
      sum: {
        field: 'amount',
      },
    },
    total_cost: {
      sum: {
        field: 'cost',
      },
    },
    total_per_day: {
      date_histogram: {
        field: 'date_created',
        interval: 'day',
        format: 'MM/dd/yyyy',
      },
      aggregations: {
        per_status: {
          terms: {
            field: 'status',
          },
          aggregations: {
            amount: {
              sum: {
                field: 'amount',
              },
            },
          },
        },
      },
    },
  },
}

const buildResultToDashboard = buildResult(query)

const mock = {
  query,
  result: {
    total: {
      count: 15,
      payment: {
        net_amount: 464926,
        paid_amount: 464926,
      },
    },
    list: {
      count: 15,
      offset: query.offset,
      rows: [
        {
          id: 1565115,
          status: 'refunded',
          status_reason: 'acquirer',
          created_at: '2017-05-24T18:52:08.826Z',
          updated_at: '2017-05-25T19:13:22.859Z',
          boleto: null,
          external_id: null,
          soft_descriptor: null,
          metadata: {},
          postback_url: null,
          payment: {
            method: 'credit_card',
            paid_amount: 2000,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 2000,
            installments: 1,
          },
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1565115',
            transaction_id: '1565115',
          },
          antifraud: null,
          amount: 2000,
          customer: {
            name: 'Test',
            document_number: '02105421016',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            address: null,
            phone: null,
            born_at: null,
            created_at: '2017-02-15T15:56:48.842Z',
            documents: null,
            external_id: null,
            gender: null,
            id: 152287,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
            pin_mode: null,
          },
          subscription: {
            id: 201341,
          },
        },
        {
          id: 1301999,
          status: 'refused',
          status_reason: 'capture_timeout',
          created_at: '2017-02-15T16:41:45.624Z',
          updated_at: '2017-02-15T21:45:05.198Z',
          boleto: null,
          external_id: null,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1301999',
            transaction_id: '1301999',
          },
          metadata: {},
          postback_url: 'https://teste-api-pa.herokuapp.com/capture',
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 5490,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 5490,
            installments: 1,
          },
          amount: 5490,
          antifraud: null,
          customer: {
            name: 'Test',
            document_number: '02105421016',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            address: {
              city: 'Porto Alegre',
              complementary: 'Zelador',
              country: 'Brasil',
              id: 93793,
              neighborhood: 'Rio Branco',
              object: 'address',
              state: 'RS',
              street: 'Rua Dona Leonor',
              street_number: '373',
              zipcode: '90420180',
            },
            phone: '(51) 99873 - 3526',
            born_at: null,
            created_at: '2017-02-15T15:56:48.842Z',
            documents: null,
            external_id: null,
            gender: null,
            id: 152287,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 1301925,
          status: 'refused',
          created_at: '2017-02-15T16:03:46.931Z',
          updated_at: '2017-02-15T21:05:05.126Z',
          boleto: null,
          external_id: null,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1301925',
            transaction_id: '1301925',
          },
          metadata: {},
          postback_url: 'https://teste-api-pa.herokuapp.com/capture',
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 5490,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 5490,
            installments: 1,
          },
          status_reason: 'capture_timeout',
          amount: 5490,
          antifraud: null,
          customer: {
            name: 'Test',
            document_number: '02105421016',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            address: {
              city: 'Porto Alegre',
              complementary: 'Zelador',
              country: 'Brasil',
              id: 93793,
              neighborhood: 'Rio Branco',
              object: 'address',
              state: 'RS',
              street: 'Rua Dona Leonor',
              street_number: '373',
              zipcode: '90420180',
            },
            phone: '(51) 99873 - 3526',
            born_at: null,
            created_at: '2017-02-15T15:56:48.842Z',
            documents: null,
            external_id: null,
            gender: null,
            id: 152287,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 1280667,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1280667',
            transaction_id: '1280667',
          },
          status: 'refused',
          status_reason: 'capture_timeout',
          created_at: '2017-02-08T12:57:36.103Z',
          updated_at: '2017-02-08T18:00:04.905Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 100000,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 100000,
            installments: 1,
          },
          amount: 100000,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '491604',
            last_digits: '3767',
          },
          subscription: null,
        },
        {
          id: 1280910,
          status: 'refused',
          status_reason: 'acquirer',
          created_at: '2017-02-08T13:07:47.332Z',
          updated_at: '2017-02-08T13:07:47.540Z',
          boleto: null,
          external_id: null,
          acquirer: {
            name: 'pagarme',
            response_code: '5000',
            sequence_number: '1280910',
            transaction_id: '1280910',
          },
          metadata: {},
          postback_url: 'http://localhost:3000/capture',
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 0,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 0,
            installments: 1,
          },
          amount: 100000,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '491604',
            last_digits: '3767',
          },
          subscription: null,
        },
        {
          id: 1732031,
          acquirer: {
            name: 'pagarme',
            response_code: '5000',
            sequence_number: '1732031',
            transaction_id: '1732031',
          },
          status: 'paid',
          status_reason: 'acquirer',
          created_at: '2017-07-19T19:42:53.785Z',
          updated_at: '2017-07-19T19:42:54.215Z',
          boleto: null,
          external_id: null,
          metadata: {
            melhorserie: {
              idade: 185,
              name: 'GOT',
            },
            oi: 'eae',
            produto: {
              cost: 100,
              name: 'Swimming Cap',
            },
          },
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 1000,
            net_amount: 950,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          antifraud: null,
          amount: 1000,
          customer: {
            name: 'Aardvark da Silva',
            document_number: '18152564000105',
            email: 'aardvark.silva@gmail.com',
            birth_date: null,
            country: null,
            document_type: 'cnpj',
            phones: null,
            address: {
              city: 'São Paulo',
              complementary: null,
              country: 'Brasil',
              id: 136361,
              neighborhood: 'Cidade Monções',
              object: 'address',
              state: 'SP',
              street: 'R. Dr. Geraldo Campos Moreira',
              street_number: '240',
              zipcode: '04571020',
            },
            phone: '(11) 98765 - 4321',
            born_at: null,
            created_at: '2017-04-24T17:13:37.868Z',
            documents: [],
            external_id: null,
            gender: null,
            id: 177887,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Aardvark da Silva',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '455636',
            last_digits: '2122',
          },
          subscription: null,
        },
        {
          id: 1761390,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1761390',
            transaction_id: '1761390',
          },
          status: 'paid',
          status_reason: 'acquirer',
          created_at: '2017-07-26T15:16:26.099Z',
          updated_at: '2017-07-26T15:16:26.650Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 1000,
            net_amount: 950,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          amount: 1000,
          antifraud: null,
          customer: {
            name: 'Test',
            document_number: '27814318505',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            address: {
              city: 'São Paulo',
              complementary: null,
              country: 'Brasil',
              id: 139088,
              neighborhood: 'Vila Clementino',
              object: 'address',
              state: 'SP',
              street: 'Rua Gandavo',
              street_number: 'Apartment 33b',
              zipcode: '04023000',
            },
            phone: '(42) 3624 - 3958',
            born_at: null,
            created_at: '2017-07-26T15:16:26.049Z',
            documents: [],
            external_id: null,
            gender: null,
            id: 221602,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 1761674,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1761674',
            transaction_id: '1761674',
          },
          status: 'paid',
          status_reason: 'acquirer',
          created_at: '2017-07-26T15:56:54.165Z',
          updated_at: '2017-07-26T15:56:54.544Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 48521,
            net_amount: 48471,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          amount: 48521,
          antifraud: null,
          customer: {
            name: 'Test',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            born_at: null,
            created_at: '2017-07-26T15:56:54.099Z',
            documents: [],
            external_id: null,
            gender: null,
            id: 221667,
            individual: null,
            object: 'customer',
            document_number: '95557289682',
            phone: '(42) 3624 - 3958',
            address: {
              city: 'São Paulo',
              complementary: null,
              country: 'Brasil',
              id: 139154,
              neighborhood: 'Vila Clementino',
              object: 'address',
              state: 'SP',
              street: 'Rua Gandavo',
              street_number: 'Apartment 33b',
              zipcode: '04023000',
            },
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 1815318,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '1815318',
            transaction_id: '1815318',
          },
          status: 'paid',
          status_reason: 'acquirer',
          created_at: '2017-08-10T19:12:23.518Z',
          updated_at: '2017-08-10T19:12:23.999Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 20000,
            net_amount: 19950,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          amount: 20000,
          antifraud: null,
          customer: {
            name: 'Test',
            document_number: '08724362921',
            email: 'test@test.com',
            birth_date: null,
            country: null,
            document_type: 'cpf',
            phones: null,
            phone: null,
            address: null,
            born_at: null,
            created_at: '2017-02-15T17:22:42.412Z',
            documents: null,
            external_id: null,
            gender: null,
            id: 152332,
            individual: null,
            object: 'customer',
          },
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: {
            id: 221378,
          },
        },
        {
          id: 2956651,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '2956651',
            transaction_id: '2956651',
          },
          status: 'refunded',
          status_reason: 'acquirer',
          created_at: '2018-02-22T20:54:06.644Z',
          updated_at: '2018-02-22T20:54:52.109Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 56435,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 56435,
            installments: 1,
          },
          amount: 56435,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 2956649,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '2956649',
            transaction_id: '2956649',
          },
          status: 'paid',
          status_reason: 'acquirer',
          created_at: '2018-02-22T20:53:36.841Z',
          updated_at: '2018-02-22T20:53:37.228Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 5646,
            net_amount: 5596,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          amount: 5646,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 2956657,
          status: 'refused',
          status_reason: 'acquirer',
          created_at: '2018-02-22T20:55:35.192Z',
          updated_at: '2018-02-22T20:55:35.571Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          acquirer: {
            name: 'pagarme',
            response_code: '5000',
            sequence_number: '2956657',
            transaction_id: '2956657',
          },
          payment: {
            method: 'credit_card',
            paid_amount: 0,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 0,
            installments: 1,
          },
          amount: 34567,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 2956655,
          status: 'refused',
          status_reason: 'acquirer',
          created_at: '2018-02-22T20:55:07.416Z',
          updated_at: '2018-02-22T20:55:07.771Z',
          boleto: null,
          external_id: null,
          metadata: {},
          postback_url: null,
          soft_descriptor: null,
          payment: {
            method: 'credit_card',
            paid_amount: 0,
            net_amount: 0,
            cost_amount: 0,
            refund_amount: 0,
            installments: 1,
          },
          acquirer: {
            name: 'pagarme',
            response_code: '5000',
            sequence_number: '2956655',
            transaction_id: '2956655',
          },
          amount: 4567,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            pin_mode: null,
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
          },
          subscription: null,
        },
        {
          id: 2956647,
          status: 'paid',
          status_reason: 'acquirer',
          soft_descriptor: null,
          metadata: {},
          postback_url: null,
          external_id: null,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '2956647',
            transaction_id: '2956647',
          },
          created_at: '2018-02-22T20:53:10.779Z',
          updated_at: '2018-02-22T20:53:11.403Z',
          boleto: null,
          payment: {
            method: 'credit_card',
            paid_amount: 45643,
            net_amount: 45593,
            cost_amount: 50,
            refund_amount: 0,
            installments: 1,
          },
          amount: 45643,
          antifraud: null,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            international: true,
            capture_method: null,
            first_digits: '411111',
            last_digits: '1111',
            pin_mode: null,
          },
          subscription: null,
        },
        {
          id: 2956654,
          status: 'refunded',
          soft_descriptor: null,
          status_reason: 'acquirer',
          metadata: {},
          postback_url: null,
          external_id: null,
          acquirer: {
            name: 'pagarme',
            response_code: '0000',
            sequence_number: '2956654',
            transaction_id: '2956654',
          },
          created_at: '2018-02-22T20:54:32.543Z',
          updated_at: '2018-02-22T20:54:49.589Z',
          boleto: null,
          payment: {
            method: 'credit_card',
            paid_amount: 34567,
            net_amount: 0,
            cost_amount: 0,
            installments: 1,
            refund_amount: 34567,
          },
          antifraud: null,
          amount: 34567,
          customer: null,
          card: {
            holder_name: 'Test',
            brand_name: 'visa',
            international: true,
            pin_mode: null,
            first_digits: '411111',
            last_digits: '1111',
            capture_method: null,
          },
          subscription: null,
        },
      ],
    },
    chart: {
      dataset: [
        {
          name: '02/08/2017',
          refused: 200000,
        },
        {
          name: '02/15/2017',
          refused: 10980,
        },
        {
          name: '05/24/2017',
          refunded: 2000,
        },
        {
          name: '07/19/2017',
          paid: 1000,
        },
        {
          name: '07/26/2017',
          paid: 49521,
        },
        {
          name: '08/10/2017',
          paid: 20000,
        },
        {
          name: '02/22/2018',
          paid: 51289,
          refunded: 91002,
          refused: 39134,
        },

      ],
    },
  },
}

describe('Transactions to dashboard', () => {
  it('should work when transactions are returned', () => {
    const result = buildResultToDashboard(requestResultMock)

    expect(result).toBeJsonEqual(mock)
  })

  it('should work when hits is empty', () => {
    const apiMock = {
      took: 2,
      timed_out: false,
      _shards: {
        total: 5,
        successful: 5,
        failed: 0,
      },
      hits: {
        total: 0,
        max_score: null,
        hits: [],
      },
    }

    const result = buildResultToDashboard(apiMock)

    const expectedResult = {
      query,
      result: {
        chart: {
          dataset: [],
        },
        list: {
          offset: query.offset,
          count: 0,
          rows: [],
        },
        total: {
          count: 0,
          payment: {
            net_amount: 0,
            paid_amount: 0,
          },
        },
      },
    }
    expect(result).toBeJsonEqual(expectedResult)
  })
})
