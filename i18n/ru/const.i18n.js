import {
  SUPPORTED_APIS,
  SUPPORTED_BROKERS,
  SUPPORTED_SERVICES,
  SUPPORTED_SERVER_TYPES
} from '../../shared/const.js';

export default function (i18n) {
  i18n.extend({
    $const: {
      api: {
        [SUPPORTED_APIS.SUPABASE]: 'Supabase'
      },
      broker: {
        [SUPPORTED_BROKERS.ALOR_OPENAPI_V2]: 'Alor Open API V2',
        [SUPPORTED_BROKERS.TINKOFF_OPENAPI_V1]: 'Tinkoff Open API V1',
        [SUPPORTED_BROKERS.UNITED_TRADERS]: 'United Traders',
        [SUPPORTED_BROKERS.ALPACA_V2]: 'Alpaca Data API V2'
      },
      server: {
        [SUPPORTED_SERVER_TYPES.PASSWORD]: 'Вход по паролю',
        [SUPPORTED_SERVER_TYPES.KEY]: 'Вход по приватному ключу'
      },
      serverState: {
        ok: 'Работает',
        failed: 'Неисправен'
      },
      serviceState: {
        active: 'Запущен',
        stopped: 'Остановлен',
        failed: 'Неисправен'
      },
      service: {
        [SUPPORTED_SERVICES.SPBEX_HALTS]: 'Торговые паузы SPBEX',
        [SUPPORTED_SERVICES.NYSE_NSDQ_HALTS]: 'Торговые паузы NYSE/NSDQ'
      }
    }
  });
}
