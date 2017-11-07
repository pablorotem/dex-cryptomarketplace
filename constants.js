const CONSTANTS = {
    loading: {
        0: 'App Initialization',
        1: 'Logging in',
        2: 'Marketmaker Initialization',
        3: 'Porfolio fetch',
        4: 'Coin activation',
        5: 'Processing trade order',
        6: 'Processing withdraw',
        7: 'Generating UTXOs'

    },
    growler: {
        0: {
            message: 'Trade bot launched',
            type: 1
        },
        1: {
            message: 'Bot stopped',
            type: 1
        },
        2: {
            message: 'Bot resumed',
            type: 1
        }
    },
    error: {
        1: {
            message: 'port 7783 marketmaker is already in use',
            loadingKeys: [1],
            critical: true
        },
        2: {
            message: 'login failled',
            loadingKeys: [1],
            critical: true
        },
        3: {
            message: 'enbable coin failed',
            loadingKeys: [1],
            critical: true
        },
        4: {
            message: 'portfolio fetch failled',
            loadingKeys: [1],
            critical: true
        },
        5: {
            message: 'orderbook fetch failled',
            loadingKeys: [1],
            critical: true
        },
        6: {
            message: 'balance fetch failled',
            loadingKeys: [1],
            critical: true
        },
        7: {
            message: 'trade failled',
            loadingKeys: [5]
        },
        8: {
            message: 'No active chain',
            critical: true
        },
        9: {
            message: 'marketmaker stopped',
            critical: true
        },
        10: {
            message: 'Withdraw failed',
            loadingKeys: [6]
        },
        11: {
            message: 'Autosplit balance into UTXOs failed',
            loadingKeys: [5, 7]
        }
    },
    colors: {
        KMD: '#326464',
        BTC: '#F7931A',
        ETH: '#4C7494',
        LTC: '#B7B7B7',
        NEO: '#78C02E',
        ADC: '#3CB0E5',
        AEON: '#164450',
        AMP: '#048DD2',
        ANC: '#000',
        ARCH: '#002652',
        ARDR: '#1162a1',
        AUR: '#136c5e',
        BANX: '#225BA6',
        BAT: '#9e1f63',
        BAY: '#584ba1',
        BC: '#202121',
        BCN: '#964F51',
        BFT: '#4fc3f7',
        BRK: '#194fa0',
        BRX: '#a8c300',
        BSD: '#1186E7',
        BTA: '#210094',
        BTC: '#F7931A',
        BCC: '#F7931A',
        BTCD: '#2A72DC',
        BTS: '#03A9E0',
        CLAM: '#D6AB31',
        CLOAK: '#DF3F1E',
        DAO: '#FF3B3B',
        DASH: '#1c75bc',
        DCR: '#3b7cfb',
        DCT: '#008770',
        DGB: '#0066cc',
        DGD: '#D8A24A',
        DGX: '#D8A24A',
        DMD: '#5497b2',
        DOGE: '#BA9F33',
        EMC: '#674c8c',
        EOS: '#19191A',
        ERC: '#101E84',
        ETC: '#669073',
        ETH: '#282828',
        FC2: '#040405',
        FCT: '#2175BB',
        FLO: '#1358C8',
        FRK: '#0633cd',
        FTC: '#679EF1',
        GAME: '#ed1b24',
        GDC: '#E9A226',
        GEMZ: '#e86060',
        GLD: '#E8BE24',
        GNO: '#00A6C4',
        GNT: '#00d6e3',
        GOLOS: '#2670B7',
        GRC: '#88A13C',
        GRS: '#648FA0',
        HEAT: '#ff5606',
        ICN: '#4c6f8c',
        IFC: '#ed272d',
        INCNT: '#f2932f',
        IOC: '#2fa3de',
        IOTA: '#FFFFFF',
        JBS: '#1A8BCD',
        KMD: '#326464',
        KOBO: '#80C342',
        KORE: '#DF4124',
        LBC: '#015C47',
        LDOGE: '#ffcc00',
        LISK: '#1A6896',
        LTC: '#838383',
        MAID: '#5492D6',
        MCO: '#0D3459',
        MINT: '#006835',
        MONA: '#a99364',
        MRC: '#4279bd',
        MSC: '#1D4983',
        MTR: '#b92429',
        MUE: '#f5a10e',
        NBT: '#FFC93D',
        NEO: '#58BF00',
        NEOS: '#1d1d1b',
        NEU: '#2983c0',
        NLG: '#003E7E',
        NMC: '#6787B7',
        NOTE: '#42daff',
        NVC: '#ecab41',
        NXT: '#008FBB',
        OK: '#0165A4',
        OMG: '#1A53F0',
        OMNI: '#18347E',
        OPAL: '#7193AA',
        PART: '#05D5A3',
        PIGGY: '#F27A7A',
        PINK: '#ED31CA',
        PIVX: '#3b2f4d',
        POT: '#105B2F',
        PPC: '#3FA30C',
        QRK: '#22AABF',
        RADS: '#924cea',
        RBIES: '#C62436',
        RBT: '#0d4982',
        RBY: '#D31F26',
        RDD: '#ED1C24',
        REP: '#40a2cb',
        RISE: '#43CEA2',
        SAR: '#1B72B8',
        SCOT: '#3498DB',
        SDC: '#981D2D',
        SIA: '#00CBA0',
        SJCX: '#003366',
        SLG: '#5A6875',
        SLS: '#1EB549',
        SNRG: '#160363',
        START: '#01AEF0',
        STEEM: '#1A5099',
        STR: '#08B5E5',
        STRAT: '#2398dd',
        SWIFT: '#428BCA',
        SYNC: '#008DD2',
        SYS: '#0098DA',
        TRIG: '#1fbff4',
        TX: '#1F8BCC',
        UBQ: '#00ec8d',
        UNITY: '#ED8527',
        USDT: '#2CA07A',
        VIOR: '#1F52A4',
        VNL: '#404249',
        VPN: '#589700',
        VRC: '#418bca',
        VTC: '#1b5c2e',
        WAVES: '#24aad6',
        XAI: '#2ef99f',
        XBS: '#d3261d',
        XCP: '#EC1550',
        XEM: '#41bf76',
        XMR: '#FF6600',
        XPM: '#e5b625',
        XRP: '#346AA9',
        XTZ: '#A6DF00',
        XVG: '#42AFB2',
        YBC: '#D6C154',
        ZEC: '#e5a93d',
        ZEIT: '#ACACAC',
        REVS: '#FF6600'
    },
    electrumConfig: [
        { coin: 'ARG', ipaddr: '173.212.225.176', port: '50081' },
        { coin: 'ARG', ipaddr: '136.243.45.140', port: '50081' },
        { coin: 'BTC', ipaddr: '173.212.225.176', port: '50001' },
        { coin: 'BTC', ipaddr: '136.243.45.140', port: '50001' },
        { coin: 'CHIPS', ipaddr: '173.212.225.176', port: '50076' },
        { coin: 'CHIPS', ipaddr: '136.243.45.140', port: '50076' },
        { coin: 'CRW', ipaddr: '173.212.225.176', port: '50041' },
        { coin: 'CRW', ipaddr: '136.243.45.140', port: '50041' },
        { coin: 'DASH', ipaddr: '173.212.225.176', port: '50098' },
        { coin: 'DASH', ipaddr: '136.243.45.140', port: '50098' },
        { coin: 'DGB', ipaddr: '136.243.45.140', port: '50022' },
        { coin: 'DGB', ipaddr: '173.212.225.176', port: '50022' },
        { coin: 'DOGE', ipaddr: '173.212.225.176', port: '50015' },
        { coin: 'DOGE', ipaddr: '136.243.45.140', port: '50015' },
        { coin: 'EMC2', ipaddr: '173.212.225.176', port: '50079' },
        { coin: 'EMC2', ipaddr: '136.243.45.140', port: '50079' },
        { coin: 'FAIR', ipaddr: '173.212.225.176', port: '50005' },
        { coin: 'FAIR', ipaddr: '136.243.45.140', port: '50005' },
        { coin: 'HUSH', ipaddr: '173.212.225.176', port: '50013' },
        { coin: 'HUSH', ipaddr: '136.243.45.140', port: '50013' },
        { coin: 'JUMBLR', ipaddr: '173.212.225.176', port: '50051' },
        { coin: 'JUMBLR', ipaddr: '136.243.45.140', port: '50051' },
        { coin: 'KMD', ipaddr: '136.243.45.140', port: '50011' },
        { coin: 'KMD', ipaddr: '173.212.225.176', port: '50011' },
        { coin: 'LTC', ipaddr: '173.212.225.176', port: '50012' },
        { coin: 'LTC', ipaddr: '136.243.45.140', port: '50012' },
        { coin: 'MNZ', ipaddr: '173.212.225.176', port: '50053' },
        { coin: 'MNZ', ipaddr: '136.243.45.140', port: '50053' },
        { coin: 'MONA', ipaddr: '173.212.225.176', port: '50002' },
        { coin: 'MONA', ipaddr: '136.243.45.140', port: '50002' },
        { coin: 'NMC', ipaddr: '173.212.225.176', port: '50036' },
        { coin: 'NMC', ipaddr: '136.243.45.140', port: '50036' },
        { coin: 'REVS', ipaddr: '173.212.225.176', port: '50050' },
        { coin: 'REVS', ipaddr: '136.243.45.140', port: '50050' },
        { coin: 'VIA', ipaddr: '173.212.225.176', port: '50033' },
        { coin: 'VIA', ipaddr: '136.243.45.140', port: '50033' },
        { coin: 'VTC', ipaddr: '173.212.225.176', port: '50088' },
        { coin: 'VTC', ipaddr: '136.243.45.140', port: '50088' },
        { coin: 'WLC', ipaddr: '173.212.225.176', port: '50052' },
        { coin: 'WLC', ipaddr: '136.243.45.140', port: '50052' },
        { coin: 'ZEC', ipaddr: '173.212.225.176', port: '50032' },
        { coin: 'ZEC', ipaddr: '136.243.45.140', port: '50032' }
    ],
    availableElectrum: [
        'MNZ',
        'BTC',
        'KMD',
        'REVS',
        'MONA',
        'CHIPS',
        'DOGE',
        'JUMBLR',
        'LTC',
        'ZEC',
        'VIA',
        'VTC',
        'WLC',
        'NMC',
        'DASH',
        'FAIR',
        'EMC2',
        'CRW',
        'ARG'
    ]

};

export default CONSTANTS;
