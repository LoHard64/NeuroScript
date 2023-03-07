const contoh = `*Asmaul Husna*

`;
// data here
const anjuran = `

Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`;

let handler = async (m, { args, usedPrefix, command }) => {
  //   let json = JSON.parse(JSON.stringify(global.asmaulhusna));
  //   let data = json
  //     .map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`)
  //     .join("\n\n");
  //   if (isNaN(args[0])) throw `contoh:\n${usedPrefix + command} 1`;
  //   if (args[0]) {
  //     if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`;
  //     let { index, latin, arabic, translation_id, translation_en } = json.find(
  //       (v) => v.index == args[0].replace(/[^0-9]/g, "")
  //     );
  //     return m.reply(
  //       `No. ${index}
  // ${arabic}
  // ${latin}
  // ${translation_id}
  // ${translation_en}
  // `.trim()
  //     );
  //   }
  m.reply(global.asmaulhusna99);
};
handler.help = ["asmaulhusna [1-99]"];
handler.tags = ["quran"];
handler.command = /^(asmaul(husna)?99)$/i;
export default handler;

global.asmaulhusna99 = `
Ar Rahman,
الرَّحْمَنُ
Yang Maha Pemurah,
The All Beneficent


Ar Rahiim,
الرَّحِيمُ
Yang Maha Penyayang,
The Most Merciful


Al Malik,
الْمَلِكُ
Yang Maha Merajai/Memerintah,
The King, The Sovereign


Al Quddus,
الْقُدُّوسُ
Yang Maha Suci,
The Most Holy


As Salaam,
السَّلاَمُ,
Yang Maha Memberi Kesejahteraan,
Peace and Blessing


Al Mu’min,
الْمُؤْمِنُ
Yang Maha Memberi Keamanan,
The Guarantor


Al Muhaimin,
الْمُهَيْمِنُ
Yang Maha Pemelihara,
The Guardian, the Preserver


Al ‘Aziiz,
الْعَزِيزُ
Yang Maha Perkasa,
The Almighty, the Self Sufficient


Al Jabbar,
الْجَبَّارُ
Yang Memiliki Mutlak Kegagahan,
The Powerful, the Irresistible


Al Mutakabbir,
الْمُتَكَبِّرُ
Yang Maha Megah, Yang Memiliki Kebesaran,
The Tremendous


Al Khaliq,
الْخَالِقُ
Yang Maha Pencipta,
The Creator


Al Baari’,
الْبَارِئُ
Yang Maha Melepaskan(Membuat, Membentuk, Menyeimbangkan),
The Maker


Al Mushawwir,
الْمُصَوِّرُ
Yang Maha Membentuk Rupa (makhluknya),
The Fashioner of Forms


Al Ghaffaar,
الْغَفَّارُ
Yang Maha Pengampun,
The Ever Forgiving


Al Qahhaar,
الْقَهَّارُ
Yang Maha Memaksa,
The All Compelling Subduer


Al Wahhaab,
الْوَهَّابُ,
Yang Maha Pemberi Karunia,
The Bestower


Ar Razzaaq,
الرَّزَّاقُ
Yang Maha Pemberi Rejeki,
The Ever Providing


Al Fattaah,
الْفَتَّاحُ
Yang Maha Pembuka Rahmat,
The Opener, the Victory Giver


Al ‘Aliim,
اَلْعَلِيْمُ
Yang Maha Mengetahui (Memiliki Ilmu),
The All Knowing, the Omniscient


Al Qaabidh,
الْقَابِضُ
Yang Maha YangMenyempitkan (makhluknya),
The Restrainer, the Straightener


Al Baasith,
الْبَاسِطُ
Yang Maha YangMelapangkan (makhluknya),
The Expander, the Munificent


Al Khaafidh,
الْخَافِضُ
Yang Maha YangMerendahkan (makhluknya),
The Abaser


Ar Raafi’,
الرَّافِعُ
Yang Maha Meninggikan (makhluknya),
The Exalter


Al Mu’izz,
الْمُعِزُّ
Yang Maha Memuliakan (makhluknya),
The Giver of Honor


Al Mudzil,
المُذِلُّ
Yang Maha Menghinakan (makhluknya),
The Giver of Dishonor


Al Samii’,
السَّمِيعُ
Yang Maha Mendengar,
The All Hearing


Al Bashiir,
الْبَصِيرُ
Yang Maha Melihat,
The All Seeing


Al Hakam,
الْحَكَمُ,
Yang Maha Menetapkan,
The Judge, the Arbitrator


Al ‘Adl,
الْعَدْلُ
Yang Maha Adil,
The Utterly Just


Al Lathiif,
اللَّطِيفُ
Yang Maha Lembut,
The Subtly Kind


Al Khabiir,
الْخَبِيرُ
Yang Maha Mengetahui Rahasia,
The All Aware


Al Haliim,
الْحَلِيمُ
Yang Maha Penyantun,
The Forbearing, the Indulgent


Al ‘Azhiim,
الْعَظِيمُ
Yang Maha Agung,
The Magnificent, the Infinite


Al Ghafuur,
الْغَفُورُ
Yang Maha Pengampun,
The All Forgiving


As Syakuur,
الشَّكُورُ
Yang Maha Pembalas Budi (Menghargai),
The Grateful


Al ‘Aliy,
الْعَلِيُّ
Yang Maha Tinggi,
The Sublimely Exalted


Al Kabiir,
الْكَبِيرُ
Yang Maha Besar,
The Great


Al Hafizh,
الْحَفِيظُ
Yang Maha Menjaga,
The Preserver


Al Muqiit,
المُقيِت
Yang Maha Pemberi Kecukupan,
The Nourisher


Al Hasiib,
الْحسِيبُ
Yang Maha Membuat Perhitungan,
The Reckoner


Al Jaliil,
الْجَلِيلُ
Yang Maha Mulia,
The Majestic


Al Kariim,
الْكَرِيمُ
Yang Maha Pemurah,
The Bountiful, the Generous


Ar Raqiib,
الرَّقِيبُ
Yang Maha Mengawasi,
The Watchful


Al Mujiib,
الْمُجِيبُ
Yang Maha Mengabulkan,
The Responsive, the Answerer


Al Waasi’,
الْوَاسِعُ
Yang Maha Luas,
The Vast, the All Encompassing


Al Hakiim,
الْحَكِيمُ
Yang Maha Bijaksana,
The Wise


Al Waduud,
الْوَدُودُ
Yang Maha Mencintai,
The Loving, the Kind One


Al Majiid,
الْمَجِيدُ
Yang Maha Mulia,
The All Glorious


Al Baa’its,
الْبَاعِثُ
Yang Maha Membangkitkan,
The Raiser of the Dead


As Syahiid,
الشَّهِيدُ
Yang Maha Menyaksikan,
The Witness


Al Haqq,
الْحَقُّ
Yang Maha Benar,
The Truth, the Real


Al Wakiil,
الْوَكِيلُ
Yang Maha Memelihara,
The Trustee, the Dependable


Al Qawiyyu,
الْقَوِيُّ
Yang Maha Kuat,
The Strong


Al Matiin,
الْمَتِينُ
Yang Maha Kokoh,
The Firm, the Steadfast


Al Waliyy,
الْوَلِيُّ
Yang Maha Melindungi,
The Protecting Friend, Patron, and Helper


Al Hamiid,
الْحَمِيدُ
Yang Maha Terpuji,
The All Praiseworthy


Al Muhshii,
الْمُحْصِي
Yang Maha MMengkalkulasi(Menghitung segala sesuatu),
The Accounter, the Numberer of All


Al Mubdi’,
الْمُبْدِئُ
Yang Maha Memulai,
The Producer, Originator, and Initiator of all


Al Mu’iid,
الْمُعِيدُ
Yang Maha Mengembalikan Kehidupan,
The Reinstater Who Brings Back All


Al Muhyii,
الْمُحْيِي
Yang Maha Menghidupkan,
The Giver of Life


Al Mumiitu,
اَلْمُمِيتُ
Yang Maha Mematikan,
The Bringer of Death, the Destroyer


Al Hayyu,
الْحَيُّ
Yang Maha Hidup,
The Ever Living


Al Qayyuum,
الْقَيُّومُ
Yang Maha Mandiri,
The Self Subsisting Sustainer of All


Al Waajid,
الْوَاجِدُ
Yang Maha Penemu,
The Perceiver, the Finder, the Unfailing


Al Maajid,
الْمَاجِدُ
Yang Maha Mulia,
The Illustrious, the Magnificent


Al Wahiid,
الْواحِدُ
Yang Maha Tunggal,
The One, The Unique, Manifestation of Unity


Al ‘Ahad,
اَلاَحَدُ
Yang Maha Esa,
The One, the All Inclusive, the Indivisible


As Shamad,
الصَّمَدُ
Yang Maha Dibutuhkan, Tempat Meminta,
The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting


Al Qaadir,
الْقَادِرُ
Yang Maha Menentukan, Maha Menyeimbangkan,
The All Able


Al Muqtadir,
الْمُقْتَدِرُ
Yang Maha Berkuasa,
The All Determiner, the Dominant


Al Muqaddim,
الْمُقَدِّمُ
Yang Maha Mendahulukan,
The Expediter, He who brings forward


Al Mu’akkhir,
الْمُؤَخِّرُ
Yang Maha Mengakhirkan,
The Delayer, He who puts far away


Al Awwal,
الأوَّلُ
Yang Maha Awal,
The First


Al Aakhir,
الآخِرُ
Yang Maha Akhir,
The Last


Az Zhaahir,
الظَّاهِرُ
Yang Maha Nyata,
The Manifest; The All Victorious


Al Baathin,
الْبَاطِنُ
Yang Maha Ghaib,
The Hidden; The All Encompassing


Al Waali,
الْوَالِي
Yang Maha Memerintah,
The Patron


Al Muta’aalii,
الْمُتَعَالِي
Yang Maha Tinggi,
The Self Exalted


Al Barri,
الْبَرُّ
Yang Maha Penderma,
The Most Kind and Righteous


At Tawwaab,
التَّوَابُ
Yang Maha Penerima Tobat,
The Ever Returning, Ever Relenting


Al Muntaqim,
الْمُنْتَقِمُ,
Yang Maha Penuntut Balas,
The Avenger


Al Afuww,
العَفُوُّ
Yang Maha Pemaaf,
The Pardoner, The Effacer of Sins


Ar Ra'uuf,
الرَّؤُوفُ
Yang Maha Pengasih,
The Compassionate, The All Pitying


Malikul Mulk,
مَالِكُ الْمُلْكِ
Yang Penguasa Kerajaan (Semesta),
The Owner of All Sovereignty


Dzul JalaaliWal Ikraam,
ذُوالْجَلاَلِوَالإكْرَامِ
Yang Maha Pemilik Kebesaran dan Kemuliaan,
The Lord of Majesty and Generosity


Al Muqsith,
الْمُقْسِطُ
Yang Maha Adil,
The Equitable, the Requiter


Al Jamii’,
الْجَامِعُ
Yang Maha Mengumpulkan,
The Gatherer, the Unifier


Al Ghaniyy,
الْغَنِيُّ
Yang Maha Berkecukupan,
The All Rich, the Independent


Al Mughnii,
الْمُغْنِي
Yang Maha Memberi Kekayaan,
The Enricher, the Emancipator


Al Maani,
اَلْمَانِعُ
Yang Maha Mencegah,
The Withholder, the Shielder, the Defender


Ad Dhaar,
الضَّارَّ
Yang Maha Memberi Derita,
The Distressor, the Harmer


An Nafii’,
النَّافِعُ
Yang Maha Memberi Manfaat,
The Propitious, the Benefactor


An Nuur,
النُّورُ
Yang Maha Bercahaya(Menerangi, Memberi Cahaya),
The Light


Al Haadii,
الْهَادِي
Yang Maha Pemberi Petunjuk,
The Guide


Al Baadii,
الْبَدِيعُ
Yang Maha Pencipta,
Incomparable, the Originator


Al Baaqii,
اَلْبَاقِي
Yang Maha Kekal,
The Ever Enduring and Immutable


Al Waarits,
الْوَارِثُ
Yang Maha Pewaris,
The Heir, the Inheritor of All


Ar Rasyiid,
الرَّشِيدُ
Yang Maha Pandai,
The Guide, Infallible Teacher, and Knower


As Shabuur,
الصَّبُورُ
Yang Maha Sabar,
The Patient
`;

// global.asmaulhusna = [
//
//         Ar Rahman",
//         الرَّحْمَنُ",
//         Yang Memiliki Mutlak sifat Pemurah",
//         The All Beneficent"
//
//
//         Ar Rahiim",
//         الرَّحِيمُ",
//         Yang Memiliki Mutlak sifat Penyayang",
//         The Most Merciful"
//
//
//         Al Malik",
//         الْمَلِكُ",
//         Yang Memiliki Mutlak sifat Merajai/Memerintah",
//         The King, The Sovereign"
//
//
//         Al Quddus",
//         الْقُدُّوسُ",
//         Yang Memiliki Mutlak sifat Suci",
//         The Most Holy"
//
//
//         As Salaam",
//         السَّلاَمُ",
//         Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
//         Peace and Blessing"
//
//
//         Al Mu’min",
//         الْمُؤْمِنُ",
//         Yang Memiliki Mutlak sifat Memberi Keamanan",
//         The Guarantor"
//
//
//         Al Muhaimin",
//         الْمُهَيْمِنُ",
//         Yang Memiliki Mutlak sifat Pemelihara",
//         The Guardian, the Preserver"
//
//
//         Al ‘Aziiz",
//         الْعَزِيزُ",
//         Yang Memiliki Mutlak Kegagahan",
//         The Almighty, the Self Sufficient"
//
//
//         Al Jabbar",
//         الْجَبَّارُ",
//         Yang Memiliki Mutlak sifat Perkasa",
//         The Powerful, the Irresistible"
//
//
//         Al Mutakabbir",
//         الْمُتَكَبِّرُ",
//         Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
//         The Tremendous"
//
//
//         Al Khaliq",
//         الْخَالِقُ",
//         Yang Memiliki Mutlak sifat Pencipta",
//         The Creator"
//
//
//         Al Baari’",
//         الْبَارِئُ",
//         Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
//         The Maker"
//
//
//         Al Mushawwir",
//         الْمُصَوِّرُ",
//         Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
//         The Fashioner of Forms"
//
//
//         Al Ghaffaar",
//         الْغَفَّارُ",
//         Yang Memiliki Mutlak sifat Pengampun",
//         The Ever Forgiving"
//
//
//         Al Qahhaar",
//         الْقَهَّارُ",
//         Yang Memiliki Mutlak sifat Memaksa",
//         The All Compelling Subduer"
//
//
//         Al Wahhaab",
//         الْوَهَّابُ",
//         Yang Memiliki Mutlak sifat Pemberi Karunia",
//         The Bestower"
//
//
//         Ar Razzaaq",
//         الرَّزَّاقُ",
//         Yang Memiliki Mutlak sifat Pemberi Rejeki",
//         The Ever Providing"
//
//
//         Al Fattaah",
//         الْفَتَّاحُ",
//         Yang Memiliki Mutlak sifat Pembuka Rahmat",
//         The Opener, the Victory Giver"
//
//
//         Al ‘Aliim",
//         اَلْعَلِيْمُ",
//         Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
//         The All Knowing, the Omniscient"
//
//
//         Al Qaabidh",
//         الْقَابِضُ",
//         Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
//         The Restrainer, the Straightener"
//
//
//         Al Baasith",
//         الْبَاسِطُ",
//         Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
//         The Expander, the Munificent"
//
//
//         Al Khaafidh",
//         الْخَافِضُ",
//         Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
//         The Abaser"
//
//
//         Ar Raafi’",
//         الرَّافِعُ",
//         Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
//         The Exalter"
//
//
//         Al Mu’izz",
//         الْمُعِزُّ",
//         Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
//         The Giver of Honor"
//
//
//         Al Mudzil",
//         المُذِلُّ",
//         Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
//         The Giver of Dishonor"
//
//
//         Al Samii’",
//         السَّمِيعُ",
//         Yang Memiliki Mutlak sifat Maha Mendengar",
//         The All Hearing"
//
//
//         Al Bashiir",
//         الْبَصِيرُ",
//         Yang Memiliki Mutlak sifat Maha Melihat",
//         The All Seeing"
//
//
//         Al Hakam",
//         الْحَكَمُ",
//         Yang Memiliki Mutlak sifat Maha Menetapkan",
//         The Judge, the Arbitrator"
//
//
//         Al ‘Adl",
//         الْعَدْلُ",
//         Yang Memiliki Mutlak sifat Maha Adil",
//         The Utterly Just"
//
//
//         Al Lathiif",
//         اللَّطِيفُ",
//         Yang Memiliki Mutlak sifat Maha Lembut",
//         The Subtly Kind"
//
//
//         Al Khabiir",
//         الْخَبِيرُ",
//         Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
//         The All Aware"
//
//
//         Al Haliim",
//         الْحَلِيمُ",
//         Yang Memiliki Mutlak sifat Maha Penyantun",
//         The Forbearing, the Indulgent"
//
//
//         Al ‘Azhiim",
//         الْعَظِيمُ",
//         Yang Memiliki Mutlak sifat Maha Agung",
//         The Magnificent, the Infinite"
//
//
//         Al Ghafuur",
//         الْغَفُورُ",
//         Yang Memiliki Mutlak sifat Maha Pengampun",
//         The All Forgiving"
//
//
//         As Syakuur",
//         الشَّكُورُ",
//         Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
//         The Grateful"
//
//
//         Al ‘Aliy",
//         الْعَلِيُّ",
//         Yang Memiliki Mutlak sifat Maha Tinggi",
//         The Sublimely Exalted"
//
//
//         Al Kabiir",
//         الْكَبِيرُ",
//         Yang Memiliki Mutlak sifat Maha Besar",
//         The Great"
//
//
//         Al Hafizh",
//         الْحَفِيظُ",
//         Yang Memiliki Mutlak sifat Maha Menjaga",
//         The Preserver"
//
//
//         Al Muqiit",
//         المُقيِت",
//         Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
//         The Nourisher"
//
//
//         Al Hasiib",
//         الْحسِيبُ",
//         Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
//         The Reckoner"
//
//
//         Al Jaliil",
//         الْجَلِيلُ",
//         Yang Memiliki Mutlak sifat Maha Mulia",
//         The Majestic"
//
//
//         Al Kariim",
//         الْكَرِيمُ",
//         Yang Memiliki Mutlak sifat Maha Pemurah",
//         The Bountiful, the Generous"
//
//
//         Ar Raqiib",
//         الرَّقِيبُ",
//         Yang Memiliki Mutlak sifat Maha Mengawasi",
//         The Watchful"
//
//
//         Al Mujiib",
//         الْمُجِيبُ",
//         Yang Memiliki Mutlak sifat Maha Mengabulkan",
//         The Responsive, the Answerer"
//
//
//         Al Waasi’",
//         الْوَاسِعُ",
//         Yang Memiliki Mutlak sifat Maha Luas",
//         The Vast, the All Encompassing"
//
//
//         Al Hakiim",
//         الْحَكِيمُ",
//         Yang Memiliki Mutlak sifat Maka Bijaksana",
//         The Wise"
//
//
//         Al Waduud",
//         الْوَدُودُ",
//         Yang Memiliki Mutlak sifat Maha Pencinta",
//         The Loving, the Kind One"
//
//
//         Al Majiid",
//         الْمَجِيدُ",
//         Yang Memiliki Mutlak sifat Maha Mulia",
//         The All Glorious"
//
//
//         Al Baa’its",
//         الْبَاعِثُ",
//         Yang Memiliki Mutlak sifat Maha Membangkitkan",
//         The Raiser of the Dead"
//
//
//         As Syahiid",
//         الشَّهِيدُ",
//         Yang Memiliki Mutlak sifat Maha Menyaksikan",
//         The Witness"
//
//
//         Al Haqq",
//         الْحَقُّ",
//         Yang Memiliki Mutlak sifat Maha Benar",
//         The Truth, the Real"
//
//
//         Al Wakiil",
//         الْوَكِيلُ",
//         Yang Memiliki Mutlak sifat Maha Memelihara",
//         The Trustee, the Dependable"
//
//
//         Al Qawiyyu",
//         الْقَوِيُّ",
//         Yang Memiliki Mutlak sifat Maha Kuat",
//         The Strong"
//
//
//         Al Matiin",
//         الْمَتِينُ",
//         Yang Memiliki Mutlak sifat Maha Kokoh",
//         The Firm, the Steadfast"
//
//
//         Al Waliyy",
//         الْوَلِيُّ",
//         Yang Memiliki Mutlak sifat Maha Melindungi",
//         The Protecting Friend, Patron, and Helper"
//
//
//         Al Hamiid",
//         الْحَمِيدُ",
//         Yang Memiliki Mutlak sifat Maha Terpuji",
//         The All Praiseworthy"
//
//
//         Al Mushii",
//         الْمُحْصِي",
//         Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
//         The Accounter, the Numberer of All"
//
//
//         Al Mubdi’",
//         الْمُبْدِئُ",
//         Yang Memiliki Mutlak sifat Maha Memulai",
//         The Producer, Originator, and Initiator of all"
//
//
//         Al Mu’iid",
//         الْمُعِيدُ",
//         Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
//         The Reinstater Who Brings Back All"
//
//
//         Al Muhyii",
//         الْمُحْيِي",
//         Yang Memiliki Mutlak sifat Maha Menghidupkan",
//         The Giver of Life"
//
//
//         Al Mumiitu",
//         اَلْمُمِيتُ",
//         Yang Memiliki Mutlak sifat Maha Mematikan",
//         The Bringer of Death, the Destroyer"
//
//
//         Al Hayyu",
//         الْحَيُّ",
//         Yang Memiliki Mutlak sifat Maha Hidup",
//         The Ever Living"
//
//
//         Al Qayyuum",
//         الْقَيُّومُ",
//         Yang Memiliki Mutlak sifat Maha Mandiri",
//         The Self Subsisting Sustainer of All"
//
//
//         Al Waajid",
//         الْوَاجِدُ",
//         Yang Memiliki Mutlak sifat Maha Penemu",
//         The Perceiver, the Finder, the Unfailing"
//
//
//         Al Maajid",
//         الْمَاجِدُ",
//         Yang Memiliki Mutlak sifat Maha Mulia",
//         The Illustrious, the Magnificent"
//
//
//         Al Wahiid",
//         الْواحِدُ",
//         Yang Memiliki Mutlak sifat Maha Tunggal",
//         The One, The Unique, Manifestation of Unity"
//
//
//         Al ‘Ahad",
//         اَلاَحَدُ",
//         Yang Memiliki Mutlak sifat Maha Esa",
//         The One, the All Inclusive, the Indivisible"
//
//
//         As Shamad",
//         الصَّمَدُ",
//         Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
//         The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
//
//
//         Al Qaadir",
//         الْقَادِرُ",
//         Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
//         The All Able"
//
//
//         Al Muqtadir",
//         الْمُقْتَدِرُ",
//         Yang Memiliki Mutlak sifat Maha Berkuasa",
//         The All Determiner, the Dominant"
//
//
//         Al Muqaddim",
//         الْمُقَدِّمُ",
//         Yang Memiliki Mutlak sifat Maha Mendahulukan",
//         The Expediter, He who brings forward"
//
//
//         Al Mu’akkhir",
//         الْمُؤَخِّرُ",
//         Yang Memiliki Mutlak sifat Maha Mengakhirkan",
//         The Delayer, He who puts far away"
//
//
//         Al Awwal",
//         الأوَّلُ",
//         Yang Memiliki Mutlak sifat Maha Awal",
//         The First"
//
//
//         Al Aakhir",
//         الآخِرُ",
//         Yang Memiliki Mutlak sifat Maha Akhir",
//         The Last"
//
//
//         Az Zhaahir",
//         الظَّاهِرُ",
//         Yang Memiliki Mutlak sifat Maha Nyata",
//         The Manifest; the All Victorious"
//
//
//         Al Baathin",
//         الْبَاطِنُ",
//         Yang Memiliki Mutlak sifat Maha Ghaib",
//         The Hidden; the All Encompassing"
//
//
//         Al Waali",
//         الْوَالِي",
//         Yang Memiliki Mutlak sifat Maha Memerintah",
//         The Patron"
//
//
//         Al Muta’aalii",
//         الْمُتَعَالِي",
//         Yang Memiliki Mutlak sifat Maha Tinggi",
//         The Self Exalted"
//
//
//         Al Barri",
//         الْبَرُّ",
//         Yang Memiliki Mutlak sifat Maha Penderma",
//         The Most Kind and Righteous"
//
//
//         At Tawwaab",
//         التَّوَابُ",
//         Yang Memiliki Mutlak sifat Maha Penerima Tobat",
//         The Ever Returning, Ever Relenting"
//
//
//         Al Muntaqim",
//         الْمُنْتَقِمُ",
//         Yang Memiliki Mutlak sifat Maha Penuntut Balas",
//         The Avenger"
//
//
//         Al Afuww",
//         العَفُوُّ",
//         Yang Memiliki Mutlak sifat Maha Pemaaf",
//         The Pardoner, the Effacer of Sins"
//
//
//         Ar Ra`uuf",
//         الرَّؤُوفُ",
//         Yang Memiliki Mutlak sifat Maha Pengasih",
//         The Compassionate, the All Pitying"
//
//
//         Malikul Mulk",
//         مَالِكُ الْمُلْكِ",
//         Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
//         The Owner of All Sovereignty"
//
//
//         Dzul JalaaliWal Ikraam",
//         ذُوالْجَلاَلِوَالإكْرَامِ",
//         Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
//         The Lord of Majesty and Generosity"
//
//
//         Al Muqsith",
//         الْمُقْسِطُ",
//         Yang Memiliki Mutlak sifat Maha Adil",
//         The Equitable, the Requiter"
//
//
//         Al Jamii’",
//         الْجَامِعُ",
//         Yang Memiliki Mutlak sifat Maha Mengumpulkan",
//         The Gatherer, the Unifier"
//
//
//         Al Ghaniyy",
//         الْغَنِيُّ",
//         Yang Memiliki Mutlak sifat Maha Berkecukupan",
//         The All Rich, the Independent"
//
//
//         Al Mughnii",
//         الْمُغْنِي",
//         Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
//         The Enricher, the Emancipator"
//
//
//         Al Maani",
//         اَلْمَانِعُ",
//         Yang Memiliki Mutlak sifat Maha Mencegah",
//         The Withholder, the Shielder, the Defender"
//
//
//         Ad Dhaar",
//         الضَّارَّ",
//         Yang Memiliki Mutlak sifat Maha Memberi Derita",
//         The Distressor, the Harmer"
//
//
//         An Nafii’",
//         النَّافِعُ",
//         Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
//         The Propitious, the Benefactor"
//
//
//         An Nuur",
//         النُّورُ",
//         Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
//         The Light"
//
//
//         Al Haadii",
//         الْهَادِي",
//         Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
//         The Guide"
//
//
//         Al Baadii",
//         الْبَدِيعُ",
//         Yang Memiliki Mutlak sifat Maha Pencipta",
//         Incomparable, the Originator"
//
//
//         Al Baaqii",
//         اَلْبَاقِي",
//         Yang Memiliki Mutlak sifat Maha Kekal",
//         The Ever Enduring and Immutable"
//
//
//         Al Waarits",
//         الْوَارِثُ",
//         Yang Memiliki Mutlak sifat Maha Pewaris",
//         The Heir, the Inheritor of All"
//
//
//         Ar Rasyiid",
//         الرَّشِيدُ",
//         Yang Memiliki Mutlak sifat Maha Pandai",
//         The Guide, Infallible Teacher, and Knower"
//
//
//         As Shabuur",
//         الصَّبُورُ",
//         Yang Memiliki Mutlak sifat Maha Sabar",
//         The Patient"
//     // ]
