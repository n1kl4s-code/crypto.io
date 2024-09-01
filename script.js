const currencies = [
    {"name": "Pace Coin", "ticker_symbol": "$PAC"},
    {"name": "0x Bitcoin", "ticker_symbol": "0XBTC"},
    {"name": "1inch", "ticker_symbol": "1INCH"},
    {"name": "2Give", "ticker_symbol": "2GIVE"},
    {"name": "Aave", "ticker_symbol": "AAVE"},
    {"name": "ABT", "ticker_symbol": "ABT"},
    {"name": "Actinium", "ticker_symbol": "ACT"},
    {"name": "Actinium", "ticker_symbol": "ACTN"},
    {"name": "Cardano", "ticker_symbol": "ADA"},
    {"name": "Add.xyz", "ticker_symbol": "ADD"},
    {"name": "AdEx", "ticker_symbol": "ADX"},
    {"name": "Aeternity", "ticker_symbol": "AE"},
    {"name": "Aeon", "ticker_symbol": "AEON"},
    {"name": "Aeur", "ticker_symbol": "AEUR"},
    {"name": "Agricultural Bank of China", "ticker_symbol": "AGI"},
    {"name": "Agoras", "ticker_symbol": "AGRS"},
    {"name": "Aion", "ticker_symbol": "AION"},
    {"name": "Algorand", "ticker_symbol": "ALGO"},
    {"name": "Ambrosus", "ticker_symbol": "AMB"},
    {"name": "Amp", "ticker_symbol": "AMP"},
    {"name": "Ampleforth", "ticker_symbol": "AMPL"},
    {"name": "Ankr", "ticker_symbol": "ANKR"},
    {"name": "Aragon", "ticker_symbol": "ANT"},
    {"name": "ApeCoin", "ticker_symbol": "APE"},
    {"name": "Apex", "ticker_symbol": "APEX"},
    {"name": "AppCoins", "ticker_symbol": "APPC"},
    {"name": "Ardor", "ticker_symbol": "ARDR"},
    {"name": "Argon", "ticker_symbol": "ARG"},
    {"name": "Ark", "ticker_symbol": "ARK"},
    {"name": "ARN", "ticker_symbol": "ARN"},
    {"name": "ARNX", "ticker_symbol": "ARNX"},
    {"name": "Arya", "ticker_symbol": "ARY"},
    {"name": "Astro", "ticker_symbol": "AST"},
    {"name": "Atlas", "ticker_symbol": "ATLAS"},
    {"name": "ATMChain", "ticker_symbol": "ATM"},
    {"name": "Cosmos", "ticker_symbol": "ATOM"},
    {"name": "Auditchain", "ticker_symbol": "AUDR"},
    {"name": "Aurora", "ticker_symbol": "AURY"},
    {"name": "Auto", "ticker_symbol": "AUTO"},
    {"name": "Avalanche", "ticker_symbol": "AVAX"},
    {"name": "Aywa", "ticker_symbol": "AYWA"},
    {"name": "Bab", "ticker_symbol": "BAB"},
    {"name": "Balancer", "ticker_symbol": "BAL"},
    {"name": "Band Protocol", "ticker_symbol": "BAND"},
    {"name": "Basic Attention Token", "ticker_symbol": "BAT"},
    {"name": "Bay", "ticker_symbol": "BAY"},
    {"name": "Bancor", "ticker_symbol": "BNT"},
    {"name": "Bch", "ticker_symbol": "BCH"},
    {"name": "Bcn", "ticker_symbol": "BCN"},
    {"name": "Bco", "ticker_symbol": "BCO"},
    {"name": "BCPT", "ticker_symbol": "BCPT"},
    {"name": "Beldex", "ticker_symbol": "BDL"},
    {"name": "Beam", "ticker_symbol": "BEAM"},
    {"name": "Bela", "ticker_symbol": "BELA"},
    {"name": "Bix", "ticker_symbol": "BIX"},
    {"name": "Bluzelle", "ticker_symbol": "BLZ"},
    {"name": "Binance Coin", "ticker_symbol": "BNB"},
    {"name": "BNT", "ticker_symbol": "BNT"},
    {"name": "Booty", "ticker_symbol": "BOOTY"},
    {"name": "Boson Protocol", "ticker_symbol": "BOS"},
    {"name": "BPT", "ticker_symbol": "BPT"},
    {"name": "Bq", "ticker_symbol": "BQ"},
    {"name": "Bread", "ticker_symbol": "BRD"},
    {"name": "BSD", "ticker_symbol": "BSD"},
    {"name": "Bitcoin SV", "ticker_symbol": "BSV"},
    {"name": "Bitcoin", "ticker_symbol": "BTC"},
    {"name": "Bitcoin Diamond", "ticker_symbol": "BTCD"},
    {"name": "Bitcoin Cash", "ticker_symbol": "BTCH"},
    {"name": "Bitcoin Private", "ticker_symbol": "BTCP"},
    {"name": "BitcoinZ", "ticker_symbol": "BTCZ"},
    {"name": "Bitcoin Dark", "ticker_symbol": "BTDX"},
    {"name": "Bitcoin Gold", "ticker_symbol": "BTG"},
    {"name": "Bitcoin Atom", "ticker_symbol": "BTM"},
    {"name": "Bitshares", "ticker_symbol": "BTS"},
    {"name": "BitTorrent", "ticker_symbol": "BTT"},
    {"name": "BitcoinX", "ticker_symbol": "BTX"},
    {"name": "Burst", "ticker_symbol": "BURST"},
    {"name": "Bze", "ticker_symbol": "BZE"},
    {"name": "Call", "ticker_symbol": "CALL"},
    {"name": "CC", "ticker_symbol": "CC"},
    {"name": "Cdn", "ticker_symbol": "CDN"},
    {"name": "Cdt", "ticker_symbol": "CDT"},
    {"name": "Cenz", "ticker_symbol": "CENZ"},
    {"name": "Chainlink", "ticker_symbol": "CHAIN"},
    {"name": "ChatCoin", "ticker_symbol": "CHAT"},
    {"name": "Chips", "ticker_symbol": "CHIPS"},
    {"name": "SwissBorg", "ticker_symbol": "CHSB"},
    {"name": "Chiliz", "ticker_symbol": "CHZ"},
    {"name": "Cix", "ticker_symbol": "CIX"},
    {"name": "Clam", "ticker_symbol": "CLAM"},
    {"name": "CloakCoin", "ticker_symbol": "CLOAK"},
    {"name": "CMM", "ticker_symbol": "CMM"},
    {"name": "Cmt", "ticker_symbol": "CMT"},
    {"name": "Cnd", "ticker_symbol": "CND"},
    {"name": "Connex", "ticker_symbol": "CNX"},
    {"name": "Chinese Yuan", "ticker_symbol": "CNY"},
    {"name": "Cobinhood", "ticker_symbol": "COB"},
    {"name": "ColossusXT", "ticker_symbol": "COLX"},
    {"name": "Compound", "ticker_symbol": "COMP"},
    {"name": "Coqui", "ticker_symbol": "COQUI"},
    {"name": "Cred", "ticker_symbol": "CRED"},
    {"name": "Cryptaur", "ticker_symbol": "CRPT"},
    {"name": "Curve", "ticker_symbol": "CRV"},
    {"name": "CrowdWiz", "ticker_symbol": "CRW"},
    {"name": "Cryptoshares", "ticker_symbol": "CS"},
    {"name": "Cryptocurrency", "ticker_symbol": "CTR"},
    {"name": "Context", "ticker_symbol": "CTXC"},
    {"name": "Civic", "ticker_symbol": "CVC"},
    {"name": "Dai", "ticker_symbol": "DAI"},
    {"name": "Dash", "ticker_symbol": "DASH"},
    {"name": "Data", "ticker_symbol": "DATA"},
    {"name": "DBC", "ticker_symbol": "DBC"},
    {"name": "Dcn", "ticker_symbol": "DCN"},
    {"name": "Decred", "ticker_symbol": "DCR"},
    {"name": "Deez", "ticker_symbol": "DEEZ"},
    {"name": "Dent", "ticker_symbol": "DENT"},
    {"name": "Dew", "ticker_symbol": "DEW"},
    {"name": "DigiByte", "ticker_symbol": "DGB"},
    {"name": "DGD", "ticker_symbol": "DGD"},
    {"name": "Delta", "ticker_symbol": "DLT"},
    {"name": "Dentacoin", "ticker_symbol": "DNT"},
    {"name": "Dock", "ticker_symbol": "DOCK"},
    {"name": "Dogecoin", "ticker_symbol": "DOGE"},
    {"name": "Polkadot", "ticker_symbol": "DOT"},
    {"name": "Dragonchain", "ticker_symbol": "DRGN"},
    {"name": "Dropil", "ticker_symbol": "DROP"},
    {"name": "Data", "ticker_symbol": "DTA"},
    {"name": "Dth", "ticker_symbol": "DTH"},
    {"name": "DTR", "ticker_symbol": "DTR"},
    {"name": "Ebst", "ticker_symbol": "EBST"},
    {"name": "Eca", "ticker_symbol": "ECA"},
    {"name": "Edgeless", "ticker_symbol": "EDG"},
    {"name": "Edo", "ticker_symbol": "EDO"},
    {"name": "EDOGE", "ticker_symbol": "EDOGE"},
    {"name": "Electra", "ticker_symbol": "ELA"},
    {"name": "Electroneum", "ticker_symbol": "ETN"},
    {"name": "Elf", "ticker_symbol": "ELF"},
    {"name": "Elix", "ticker_symbol": "ELIX"},
    {"name": "Ella", "ticker_symbol": "ELLA"},
    {"name": "Emblem", "ticker_symbol": "EMB"},
    {"name": "Emc", "ticker_symbol": "EMC"},
    {"name": "Emercoin", "ticker_symbol": "EMC2"},
    {"name": "Enigma", "ticker_symbol": "ENG"},
    {"name": "Enjin", "ticker_symbol": "ENJ"},
    {"name": "ENTRP", "ticker_symbol": "ENTRP"},
    {"name": "Eon", "ticker_symbol": "EON"},
    {"name": "Eop", "ticker_symbol": "EOP"},
    {"name": "EOS", "ticker_symbol": "EOS"},
    {"name": "EQLI", "ticker_symbol": "EQLI"},
    {"name": "EQUA", "ticker_symbol": "EQUA"},
    {"name": "Ethereum Classic", "ticker_symbol": "ETC"},
    {"name": "Ethereum", "ticker_symbol": "ETH"},
    {"name": "Ethos", "ticker_symbol": "ETHOS"},
    {"name": "ETN", "ticker_symbol": "ETN"},
    {"name": "ETP", "ticker_symbol": "ETP"},
    {"name": "Euro", "ticker_symbol": "EUR"},
    {"name": "EVX", "ticker_symbol": "EVX"},
    {"name": "Exmo", "ticker_symbol": "EXMO"},
    {"name": "Exp", "ticker_symbol": "EXP"},
    {"name": "Fair Coin", "ticker_symbol": "FAIR"},
    {"name": "FCT", "ticker_symbol": "FCT"},
    {"name": "Fida", "ticker_symbol": "FIDA"},
    {"name": "Filecoin", "ticker_symbol": "FIL"},
    {"name": "Fjc", "ticker_symbol": "FJC"},
    {"name": "Fldc", "ticker_symbol": "FLDC"},
    {"name": "Flo", "ticker_symbol": "FLO"},
    {"name": "Flux", "ticker_symbol": "FLUX"},
    {"name": "FSN", "ticker_symbol": "FSN"},
    {"name": "FTC", "ticker_symbol": "FTC"},
    {"name": "Fuel", "ticker_symbol": "FUEL"},
    {"name": "FunFair", "ticker_symbol": "FUN"},
    {"name": "Game", "ticker_symbol": "GAME"},
    {"name": "Gas", "ticker_symbol": "GAS"},
    {"name": "GBP", "ticker_symbol": "GBP"},
    {"name": "GBX", "ticker_symbol": "GBX"},
    {"name": "Gbyte", "ticker_symbol": "GBYTE"},
    {"name": "Gin", "ticker_symbol": "GIN"},
    {"name": "GLXT", "ticker_symbol": "GLXT"},
    {"name": "GMR", "ticker_symbol": "GMR"},
    {"name": "GMT", "ticker_symbol": "GMT"},
    {"name": "GNO", "ticker_symbol": "GNO"},
    {"name": "GNT", "ticker_symbol": "GNT"},
    {"name": "Gold", "ticker_symbol": "GOLD"},
    {"name": "Grc", "ticker_symbol": "GRC"},
    {"name": "Grin", "ticker_symbol": "GRIN"},
    {"name": "Grs", "ticker_symbol": "GRS"},
    {"name": "GRT", "ticker_symbol": "GRT"},
    {"name": "Gsc", "ticker_symbol": "GSC"},
    {"name": "GTO", "ticker_symbol": "GTO"},
    {"name": "Gup", "ticker_symbol": "GUP"},
    {"name": "GUSD", "ticker_symbol": "GUSD"},
    {"name": "Gvt", "ticker_symbol": "GVT"},
    {"name": "Gxs", "ticker_symbol": "GXS"},
    {"name": "Gzr", "ticker_symbol": "GZR"},
    {"name": "Hight", "ticker_symbol": "HIGHT"},
    {"name": "Hns", "ticker_symbol": "HNS"},
    {"name": "Hodl", "ticker_symbol": "HODL"},
    {"name": "Hot", "ticker_symbol": "HOT"},
    {"name": "HPB", "ticker_symbol": "HPB"},
    {"name": "Hsr", "ticker_symbol": "HSR"},
    {"name": "HT", "ticker_symbol": "HT"},
    {"name": "HTML", "ticker_symbol": "HTML"},
    {"name": "Huc", "ticker_symbol": "HUC"},
    {"name": "Husd", "ticker_symbol": "HUSD"},
    {"name": "Hush", "ticker_symbol": "HUSH"},
    {"name": "ICN", "ticker_symbol": "ICN"},
    {"name": "ICP", "ticker_symbol": "ICP"},
    {"name": "ICX", "ticker_symbol": "ICX"},
    {"name": "Ignis", "ticker_symbol": "IGNIS"},
    {"name": "Ilk", "ticker_symbol": "ILK"},
    {"name": "Ink", "ticker_symbol": "INK"},
    {"name": "INS", "ticker_symbol": "INS"},
    {"name": "Ion", "ticker_symbol": "ION"},
    {"name": "IOP", "ticker_symbol": "IOP"},
    {"name": "IOST", "ticker_symbol": "IOST"},
    {"name": "IOTX", "ticker_symbol": "IOTX"},
    {"name": "IQ", "ticker_symbol": "IQ"},
    {"name": "ITC", "ticker_symbol": "ITC"},
    {"name": "JNT", "ticker_symbol": "JNT"},
    {"name": "JPY", "ticker_symbol": "JPY"},
    {"name": "KCS", "ticker_symbol": "KCS"},
    {"name": "Kin", "ticker_symbol": "KIN"},
    {"name": "KMD", "ticker_symbol": "KMD"},
    {"name": "KNC", "ticker_symbol": "KNC"},
    {"name": "Krb", "ticker_symbol": "KRB"},
    {"name": "KSM", "ticker_symbol": "KSM"},
    {"name": "Lbc", "ticker_symbol": "LBC"},
    {"name": "Lend", "ticker_symbol": "LEND"},
    {"name": "Leo", "ticker_symbol": "LEO"},
    {"name": "Link", "ticker_symbol": "LINK"},
    {"name": "Lkk", "ticker_symbol": "LKK"},
    {"name": "Loom Network", "ticker_symbol": "LOOM"},
    {"name": "Lpt", "ticker_symbol": "LPT"},
    {"name": "Lrc", "ticker_symbol": "LRC"},
    {"name": "Lsk", "ticker_symbol": "LSK"},
    {"name": "Litecoin", "ticker_symbol": "LTC"},
    {"name": "Lunyr", "ticker_symbol": "LUN"},
    {"name": "MaidSafeCoin", "ticker_symbol": "MAID"},
    {"name": "Mana", "ticker_symbol": "MANA"},
    {"name": "Polygon", "ticker_symbol": "MATIC"},
    {"name": "Maximine Coin", "ticker_symbol": "MAX"},
    {"name": "Mcap", "ticker_symbol": "MCAP"},
    {"name": "Mco", "ticker_symbol": "MCO"},
    {"name": "Mda", "ticker_symbol": "MDA"},
    {"name": "Mds", "ticker_symbol": "MDS"},
    {"name": "Med", "ticker_symbol": "MED"},
    {"name": "Meetone", "ticker_symbol": "MEETONE"},
    {"name": "Mft", "ticker_symbol": "MFT"},
    {"name": "Iota", "ticker_symbol": "MIOTA"},
    {"name": "Mithril", "ticker_symbol": "MITH"},
    {"name": "Maker", "ticker_symbol": "MKR"},
    {"name": "Mln", "ticker_symbol": "MLN"},
    {"name": "Mnix", "ticker_symbol": "MNX"},
    {"name": "MonaCoin", "ticker_symbol": "MONA"},
    {"name": "Mithril", "ticker_symbol": "MSR"},
    {"name": "Mth", "ticker_symbol": "MTH"},
    {"name": "Metal", "ticker_symbol": "MTL"},
    {"name": "Music", "ticker_symbol": "MUSIC"},
    {"name": "Mzc", "ticker_symbol": "MZC"},
    {"name": "Nano", "ticker_symbol": "NANO"},
    {"name": "Nas", "ticker_symbol": "NAS"},
    {"name": "NavCoin", "ticker_symbol": "NAV"},
    {"name": "Nucleus Vision", "ticker_symbol": "NCASH"},
    {"name": "NDZ", "ticker_symbol": "NDZ"},
    {"name": "Neblio", "ticker_symbol": "NEBL"},
    {"name": "Neo", "ticker_symbol": "NEO"},
    {"name": "NeosCoin", "ticker_symbol": "NEOS"},
    {"name": "Neuromorphic", "ticker_symbol": "NEU"},
    {"name": "Nexo", "ticker_symbol": "NEXO"},
    {"name": "NGC", "ticker_symbol": "NGC"},
    {"name": "NIO", "ticker_symbol": "NIO"},
    {"name": "NKN", "ticker_symbol": "NKN"},
    {"name": "NLC2", "ticker_symbol": "NLC2"},
    {"name": "NLG", "ticker_symbol": "NLG"},
    {"name": "NMC", "ticker_symbol": "NMC"},
    {"name": "NMR", "ticker_symbol": "NMR"},
    {"name": "NTBC", "ticker_symbol": "NTBC"},
    {"name": "Nuls", "ticker_symbol": "NULS"},
    {"name": "Nexus", "ticker_symbol": "NXS"},
    {"name": "Nxt", "ticker_symbol": "NXT"},
    {"name": "Oax", "ticker_symbol": "OAX"},
    {"name": "Ok", "ticker_symbol": "OK"},
    {"name": "OMG Network", "ticker_symbol": "OMG"},
    {"name": "Omni", "ticker_symbol": "OMNI"},
    {"name": "One", "ticker_symbol": "ONE"},
    {"name": "Ong", "ticker_symbol": "ONG"},
    {"name": "Ontology", "ticker_symbol": "ONT"},
    {"name": "OOT", "ticker_symbol": "OOT"},
    {"name": "OST", "ticker_symbol": "OST"},
    {"name": "Ox", "ticker_symbol": "OX"},
    {"name": "Oxt", "ticker_symbol": "OXT"},
    {"name": "Oxy", "ticker_symbol": "OXY"},
    {"name": "Particl", "ticker_symbol": "PART"},
    {"name": "Pasc", "ticker_symbol": "PASC"},
    {"name": "Pasl", "ticker_symbol": "PASL"},
    {"name": "Pax", "ticker_symbol": "PAX"},
    {"name": "Paxos Gold", "ticker_symbol": "PAXG"},
    {"name": "Pay", "ticker_symbol": "PAY"},
    {"name": "Payx", "ticker_symbol": "PAYX"},
    {"name": "PinkCoin", "ticker_symbol": "PINK"},
    {"name": "Pirl", "ticker_symbol": "PIRL"},
    {"name": "Pivx", "ticker_symbol": "PIVX"},
    {"name": "Plr", "ticker_symbol": "PLR"},
    {"name": "POA Network", "ticker_symbol": "POA"},
    {"name": "Poe", "ticker_symbol": "POE"},
    {"name": "Polis", "ticker_symbol": "POLIS"},
    {"name": "Polymath", "ticker_symbol": "POLY"},
    {"name": "PotCoin", "ticker_symbol": "POT"},
    {"name": "Power Ledger", "ticker_symbol": "POWR"},
    {"name": "Peercoin", "ticker_symbol": "PPC"},
    {"name": "Ppp", "ticker_symbol": "PPP"},
    {"name": "Ppt", "ticker_symbol": "PPT"},
    {"name": "Presearch", "ticker_symbol": "PRE"},
    {"name": "Prl", "ticker_symbol": "PRL"},
    {"name": "Pungo", "ticker_symbol": "PUNGO"},
    {"name": "Pura", "ticker_symbol": "PURA"},
    {"name": "Qash", "ticker_symbol": "QASH"},
    {"name": "Qiwi", "ticker_symbol": "QIWI"},
    {"name": "Qlc Chain", "ticker_symbol": "QLC"},
    {"name": "Quant", "ticker_symbol": "QNT"},
    {"name": "Qrl", "ticker_symbol": "QRL"},
    {"name": "Qsp", "ticker_symbol": "QSP"},
    {"name": "Qtum", "ticker_symbol": "QTUM"},
    {"name": "R", "ticker_symbol": "R"},
    {"name": "Rads", "ticker_symbol": "RADS"},
    {"name": "Rap", "ticker_symbol": "RAP"},
    {"name": "Ray", "ticker_symbol": "RAY"},
    {"name": "Rcn", "ticker_symbol": "RCN"},
    {"name": "Rdd", "ticker_symbol": "RDD"},
    {"name": "Rdn", "ticker_symbol": "RDN"},
    {"name": "Ren", "ticker_symbol": "REN"},
    {"name": "Augur", "ticker_symbol": "REP"},
    {"name": "Repv2", "ticker_symbol": "REPV2"},
    {"name": "Request", "ticker_symbol": "REQ"},
    {"name": "Rhoc", "ticker_symbol": "RHOC"},
    {"name": "Ric", "ticker_symbol": "RIC"},
    {"name": "Rise", "ticker_symbol": "RISE"},
    {"name": "Rlc", "ticker_symbol": "RLC"},
    {"name": "Rpx", "ticker_symbol": "RPX"},
    {"name": "Rub", "ticker_symbol": "RUB"},
    {"name": "Raven", "ticker_symbol": "RVN"},
    {"name": "Ryo", "ticker_symbol": "RYO"},
    {"name": "SafeMoon", "ticker_symbol": "SAFEMOON"},
    {"name": "Sai", "ticker_symbol": "SAI"},
    {"name": "Salt", "ticker_symbol": "SALT"},
    {"name": "Sande", "ticker_symbol": "SAN"},
    {"name": "Sandbox", "ticker_symbol": "SAND"},
    {"name": "Sbd", "ticker_symbol": "SBD"},
    {"name": "Sberbank", "ticker_symbol": "SBERBANK"},
    {"name": "Sc", "ticker_symbol": "SC"},
    {"name": "Ser", "ticker_symbol": "SER"},
    {"name": "Shift", "ticker_symbol": "SHIFT"},
    {"name": "Sib", "ticker_symbol": "SIB"},
    {"name": "Sin", "ticker_symbol": "SIN"},
    {"name": "Skl", "ticker_symbol": "SKL"},
    {"name": "Sky", "ticker_symbol": "SKY"},
    {"name": "Slr", "ticker_symbol": "SLR"},
    {"name": "Sls", "ticker_symbol": "SLS"},
    {"name": "Smart", "ticker_symbol": "SMART"},
    {"name": "Sonm", "ticker_symbol": "SNM"},
    {"name": "Status", "ticker_symbol": "SNT"},
    {"name": "Synthetix", "ticker_symbol": "SNX"},
    {"name": "Social", "ticker_symbol": "SOC"},
    {"name": "Solana", "ticker_symbol": "SOL"},
    {"name": "Spacehbit", "ticker_symbol": "SPACEHBIT"},
    {"name": "SpankChain", "ticker_symbol": "SPANK"},
    {"name": "Sphtx", "ticker_symbol": "SPHTX"},
    {"name": "Srn", "ticker_symbol": "SRN"},
    {"name": "Stak", "ticker_symbol": "STAK"},
    {"name": "Start", "ticker_symbol": "START"},
    {"name": "Steem", "ticker_symbol": "STEEM"},
    {"name": "Storj", "ticker_symbol": "STORJ"},
    {"name": "Storm", "ticker_symbol": "STORM"},
    {"name": "Stox", "ticker_symbol": "STOX"},
    {"name": "Stq", "ticker_symbol": "STQ"},
    {"name": "Strat", "ticker_symbol": "STRAT"},
    {"name": "Stx", "ticker_symbol": "STX"},
    {"name": "Substratum", "ticker_symbol": "SUB"},
    {"name": "Sumo", "ticker_symbol": "SUMO"},
    {"name": "SushiSwap", "ticker_symbol": "SUSHI"},
    {"name": "Syscoin", "ticker_symbol": "SYS"},
    {"name": "Taas", "ticker_symbol": "TAAS"},
    {"name": "Tenx", "ticker_symbol": "PAY"},
    {"name": "Tix", "ticker_symbol": "TIX"},
    {"name": "TomoChain", "ticker_symbol": "TOMO"},
    {"name": "Tnt", "ticker_symbol": "TNT"},
    {"name": "Tron", "ticker_symbol": "TRX"},
    {"name": "Tusd", "ticker_symbol": "TUSD"},
    {"name": "Utrust", "ticker_symbol": "UTK"},
    {"name": "VeChain", "ticker_symbol": "VET"},
    {"name": "Vibe", "ticker_symbol": "VIBE"},
    {"name": "Wagerr", "ticker_symbol": "WGR"},
    {"name": "Wbtc", "ticker_symbol": "WBTC"},
    {"name": "Wbtc", "ticker_symbol": "WBTC"},
    {"name": "Wtc", "ticker_symbol": "WTC"},
    {"name": "Xbp", "ticker_symbol": "XBP"},
    {"name": "Xdn", "ticker_symbol": "XDN"},
    {"name": "Xem", "ticker_symbol": "XEM"},
    {"name": "Xrp", "ticker_symbol": "XRP"},
    {"name": "Xtz", "ticker_symbol": "XTZ"},
    {"name": "Yoyow", "ticker_symbol": "YOYOW"},
    {"name": "Zcl", "ticker_symbol": "ZCL"},
    {"name": "Zen", "ticker_symbol": "ZEN"},
    {"name": "Zilliqa", "ticker_symbol": "ZIL"},
    {"name": "Zrx", "ticker_symbol": "ZRX"}
]

// test
//console.log(`Length of array currencies: ${currencies.length}`);

const cloneable = document.querySelector("template");
const gridContainer = document.querySelector(".grid-container");

currencies.forEach(currency => {
    const imageSRC = `color/${currency.ticker_symbol.toLocaleLowerCase()}.svg`;
    const clone = cloneable.content.cloneNode(true);
    const displayDiv = document.createElement("div");
    displayDiv.classList.add("display-div");
    clone.querySelector(".currency-name").textContent = currency.name;
    displayDiv.appendChild(clone);
    const currencySVG = displayDiv.querySelector(".svg");
    displayDiv.setAttribute("data-name", currency.name);
    displayDiv.setAttribute("data-ticker", currency.ticker_symbol)
    currencySVG.style.backgroundImage = `url(${imageSRC})`;

    displayDiv.addEventListener("click", () => {
        let details = window.open("currency-details.html", "_blank");
        details.addEventListener("DOMContentLoaded", () => {
            details.document.title = currency.name;
            details.document.querySelector("#favicon").setAttribute("href", imageSRC);
            details.document.querySelector("#centered-icon").setAttribute("src", imageSRC);
            details.document.querySelector(".currency-head-name").textContent = currency.name;
        });
    });
        
    gridContainer.appendChild(displayDiv);
});


const searchbar = document.getElementById("searchbar");
const searchDivs = document.querySelectorAll(".display-div");
const searchResults = document.querySelector(".search-results-display");
searchResults.style.display = "none";

searchbar.addEventListener("input", () => {
    const searchValue = searchbar.value;

    searchDivs.forEach(div => {
        const dataValue = div.getAttribute("data-name");

        if (dataValue.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
            div.classList.add("in-search");
            div.classList.remove("not-in-search");

            const possibleDivs = document.querySelectorAll(".in-search");
            const firstDiv = possibleDivs[0];
            firstDiv.scrollIntoView();
            document.querySelector(".result-counter").textContent = possibleDivs.length;
            document.querySelector(".search-term").textContent = searchValue;
            searchResults.style.display = "flex";
        } else if (!dataValue.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
            div.classList.remove("in-search");
            div.classList.add("not-in-search");
        };
    });

    if (searchValue.toLowerCase() === "") {
        searchResults.style.display = "none";
        gridContainer.scrollTop = 0;
    };
});

let i = 0;

function goThroughDivs(event) {
    if (event.key === "Enter") {
        const possibleDivs = document.querySelectorAll(".in-search");

        if (possibleDivs.length === 1) {
            // :]
        } else {
            // Remove the .selected class from the previously selected div, if any
            const previousDiv = document.querySelector(".in-search.selected");
            if (previousDiv) {
                previousDiv.classList.remove("selected");
            };

            if (i < possibleDivs.length) {
                const divToShow = possibleDivs[i];
                divToShow.scrollIntoView();
                divToShow.classList.add("selected");
                i++;
            } else {
                i = 0;
            };
        };
    };
};



//filter logic

function getFilterValue(elem) {
    if (elem.value === elem.children[0].value) {
        console.log("First child selected");
    } else if (elem.value === elem.children[1].value) {
        console.log("Second child selected");
    } else if (elem.value === elem.children[2].value) {
        console.log("Third child selected");
    } else {
        console.log("Fourth child selected")
    }
}