exports.serverErr = `Server sedang eror`
exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`š Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\nš Bio: ' + about : ''}
šØāā¤ļøāšØ Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#ļøā£ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
š Link: https://wa.me/${m.sender.split`@`[0]}
š¤·āāļø XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
šļø Level: ${level}
š¢ Role: ${role}
š Limit: ${limit}
Ā®ļø Registered: ${registered ? 'ā (' + tanggal(regTime) + ')' : 'ā'}
ā½ Premium: ${premium ? `ā\nā° Expired Premium : msToDate(premiumDate - now)` : 'ā'}
š Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`š²šØ Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

šŗš² Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ā ļø\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`š²šØ Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



šŗš² Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`ā­āć *VERIFIKASI BERHASIL* ć
ā\`\`\`Verifikasi Sukses Dengan\`\`\` 
ā
ā\`\`\`SN: ${a}\`\`\`
ā\`\`\`Pada : ${b}\`\`\`
ā\`\`\`Nama : ${c}\`\`\`
ā\`\`\`Umur : ${d}\`\`\`
ā\`\`\`Gender : ${e}\`\`\`
ā\`\`\`Nomor : @${f}\`\`\`
ā\`\`\`Untuk menggunakan bot silahkan \`\`\`
ā\`\`\`Kirim perintah ${g}menu\`\`\`
ā\`\`\`atau ${h}allmenu\`\`\`
ā
ā\`\`\`\Total : ${i} Users\`\`\`
ā°āāāāāāāāāāāāāāāāāāāāā`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} š¤, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `ā Tidak ada absen berlangsung di group ini !`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`ā Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`ā Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Soal ini belum selesai!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Contoh penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `ā Jawaban Salah Hahahaha`
}

exports.JwbTrue = (tebak, exp) => {
return`š® ${tebak} š®\n\nJawaban Benar š\n+${exp} XP`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	ā¢ Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	ā¢ Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `ā Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `ā ļø Sesi chat ini telah diberhentikan oleh teman chat kamu`
}
exports.AnonOn = () => {
    return `ā ļø Kamu masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan š¼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `š Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `ā ļø Kamu belum pernah memulai chat! Makannya Chattan Dulu Ama Bot Nya`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `ā ļø Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner š\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `Sabarr Bangg, Lagi Di Proses Nihh`
}
exports.ok = () => {
    return `ā Done.`
}

exports.err = () => {
    return `ā ļø Fitur Sedang Error, Tunggu Perbaikan`
}
exports.erorLink = () => {
    return `ā ļø Link nya error, Ngirim Link Kok Error:v`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ā Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `ā Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `ā Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `ā Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `ā  ļøSudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `š„  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `š  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*āā ć HALL OF SHAME ć āā*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `ā User bukan seorang admin! ā`
}

exports.adminAlready = () => {
    return `ā Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! š`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} š selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*āTime Server : ${time}*
*š List-Menu Bot :*

ā­āā ć Bot Info ć 
āā !owner
āā !rules
āā !sc
āā !ping
āā !runtime
āā !botstatus
ā°ā !donate


ā­āā ć Owner ć 
āā !setmenu [query]
āā !setmenu katalog
āā !setmenu katalog2
āā !setmenu list
āā !setwm packname|author
āā !sendsesi
āā !listpc
āā !listgc
āā !broadcast [text]
āā !bc [text]
āā !bcgc 
āā !bcimage
āā !bcaudio
āā !bcstiker
āā !bcvn
āā !bcvideo
āā !banuser
āā !unban
āā !banned
āā !listbanned
āā !block
āā !ublock
āā !listblock
āā !addpremium
āā !delpremium
āā !listpremium
āā !nsfw [on/off]
āā !mute [on/off]
āā !autoblok212 [on/off]
āā !banchat
āā !unbanchat
āā !autorespond [on/off]
āā !antiviewonce [on/off]
āā !autobio [on/off]
āā !anticall [on/off]
āā !join [link]
āā !self
āā !public [only bot]
āā !del [reply pesan bot]
āā !pppanjang
āā !setpppanjang
ā°ā !setppbot [reply image]

ā­āā ć Store Menu ć
āā !list
āā !addlist [key|respond]
āā !dellist [key]
āā !update [key|respond]
āā !store
āā !kali
āā !bagi
āā !tambah
āā !kurang
āā !kalkulator
āā !setproses
āā !updateproses
āā !cekproses
āā !delproses
āā !setdone
āā !updatedone
āā !cekdone
āā !deldone
āā !pay
āā !setcaptionpay
āā !setpaysewa
āā !proses
ā°ā !done

ā­āā ć Anonymous ć
āā !menfess
āā !anonymous 
āā !start
āā !skip [daerah]
ā°ā !stop [surah|ayat]


ā­āā ć Database ć 
āā !setcmd [reply stiker]
āā !delcmd [reply stiker]
āā !listcmd
āā !absen
āā !cekabsen
āā !deleteabsen
āā !absenstart
āā !addmsg [nama file]
āā !getmsg [nama file]
āā !listmsg
ā°ā !delmsg [nama file]

ā­āā ć Rpg Games ć
āā !adventure
āā !weekly
āā !use
āā !transfer
āā !slot
āā !shop
āā !pasar
āā !profile
āā !ojek
āā !open
āā !nguli
āā !narik
āā !nabung
āā !monthly
āā !mining
āā !merampok
āā !mancing
āā !kolam
āā !koboy
āā !kerja
āā !kandang
āā !judi
āā !inventory
āā !hourly
āā !fishop
āā !feed
āā !duel
āā !daily
āā !craft
āā !cooldown
āā !cook
āā !collect
āā !chop
āā !casino
āā !buy
āā !bank 
āā !bansos
āā !berdagang
āā !berkebon
ā°ā !build

ā­āā ć Group ć 
āā !addsewa
āā !delsewa
āā !listsewa
āā !ceksewa
āā !register
āā !unregister
āā !ceksn
āā !listonline
āā !sider
āā !wm packname|author
āā !infochat
āā !setdesk [text]
āā !setppgrup [reply image]
āā !pppanjanggc
āā !setpppanjanggc
āā !revoke
āā !leave
āā !add [62***]
āā !kick @tag
āā !leave
āā !linkgc
āā !welcome [on/off]
āā !goodbye [on/off]
āā !demotedetect [on/off]
āā !promotedetect  [on/off]
āā !setwelcome
āā !updatewelcome
āā !delwelcome
āā !cekwelcome
āā !setgoodbye
āā !updategoodbye
āā !delgoodbye
āā !cekgoodbye
āā !setpromote
āā !updatepromote
āā !setdemote
āā !updatedemote
āā !cekpromote
āā !cekdemote
āā !delpromote
āā !deldemote
āā !nsfw [on/off]
āā !antilink [on/off]
āā !take packname|author
āā !group [open/close]
āā !tagall [text]
ā°ā !hidetag [text]

ā­āā ć Anime ć 
āā !quotesanime
āā !anime [query]
āā !animeinfo
āā !manga [query]
ā°ā !character [query]

ā­āā ć Tag ć 
āā !stickertag
āā !videotag [query]
āā !vntag [query]
ā°ā !imagetag [query]

ā­āā ć Stalking ć 
āā !igstalk [username]
āā !ghstalk [username]
ā°ā !ytstalk [channel]


ā­āā ć Search ć 
āā !ytsearch [query]
āā !wallpaper [query]
āā !google [query]
āā !wikimedia [query]
āā !apksearch
āā !findapk
āā !hentai
āā !wattpad [query]
āā !webtoons [query]
āā !drakor [query]
āā !brainly [query]
ā°ā !pinterest [query]


ā­āā ć Converter ć
āā !emoji [š­]
āā !emojimix [š­+š©]
āā !toaudio [video]
āā !tomp3 [video]
āā !tovn [video]
āā !stiker [reply image]
āā !tourl [image/video/stiker]
āā !togif [sticker]
āā !tomp4 [sticker]
ā°ā${prefix}toimg [reply sticker]


ā­āā ć Image Effect ć 
āā !wanted [reply image/stiker]
āā !utatoo [reply image/stiker]
āā !unsharpen [reply image/stiker]
āā !thanos [reply image/stiker]
āā !sniper [reply image/stiker]
āā !sharpen [reply image/stiker]
āā !sepia [reply image/stiker]
āā !scary [reply image/stiker]
āā !rip [reply image/stiker]
āā !redple [reply image/stiker]
āā !rejected [reply image/stiker]
āā !posterize [reply image/stiker]
āā !ps4 [reply image/stiker]
āā !pixelize [reply image/stiker]
āā !missionpassed [reply image/stiker]
āā !moustache [reply image/stiker]
āā !lookwhatkarenhave [reply image/stiker]
āā !jail [reply image/stiker]
āā !invert [reply image/stiker]
āā !instagram [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !glitch2 [reply image/stiker]
āā !gay [reply image/stiker]
āā !frame [reply image/stiker]
āā !fire [reply image/stiker]
āā !distort [reply image/stiker]
āā !dictator [reply image/stiker]
āā !deepfry [reply image/stiker]
āā !ddungeon [reply image/stiker]
āā !circle [reply image/stiker]
āā !challenger [reply image/stiker]
āā !burn [reply image/stiker]
āā !brazzers [reply image/stiker]
ā°ā !beautiful [reply image/stiker]


ā­āā ć Sticker Effect ć 
āā !jail [reply image/stiker]
āā !red [reply image/stiker]
āā !gay [reply image/stiker]
āā !bloo [reply image/stiker]
āā !blue [reply image/stiker]
āā !sepia [reply image/stiker]
āā !green [reply image/stiker]
āā !glass [reply image/stiker]
āā !invert [reply image/stiker]
āā !blurple [reply image/stiker]
āā !blurple2 [reply image/stiker]
āā !wasted [reply image/stiker]
āā !passed [reply image/stiker]
āā !triggered [reply image/stiker]
āā !comrade [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !threshold [reply image/stiker]
āā !brightness [reply image/stiker]
ā°ā !invertgreyscale [reply image/stiker]


ā­āā ć Download ć 
āā !tiktok [link]
āā !tiktoknowm [link]
āā !tiktokwm [link]
āā !tiktokaudio [link]
āā !ytdl [link]
āā !play [query]
āā !ytmp3 [link]
āā !ytshortmp3 [link]
āā !ytmp4 [link]
āā !ytshorts [link]
āā !facebook [link]
āā !facebooksd [link]
āā !facebookhd [link]
āā !fbaudio [link]
āā !igstory [username]
āā !igdl [link]
āā !igphoto [link]
āā !igvideo [link]
āā !igreels [link]
āā !igtv [link]
āā !soundcloud [link]
āā !gitclone [link repo]
āā !gitrepo [username repo branch]
āā !mediafire [link]
ā°ā !twitter link

ā­āā ć Primbon ć
āā !nomorhoki 887435047326
āā !artimimpi [query]
āā !artinama [query]
āā !ramaljodoh
āā !ramaljodohbali
āā !suamiistri
āā !ramalcinta
āā !cocoknama
āā !pasangan
āā !jadiannikah
āā !sifatusaha
āā !rezeki
āā !pekerjaan
āā !nasib
āā !penyakit
āā !tarot
āā !fengshui
āā !haribaik
āā !harisangar
āā !harisial
āā !nagahari
āā !arahrezeki
āā !peruntungan
āā !weton
āā !karakter
āā !keberuntungan
āā !memancing
āā !masasubur
āā !zodiak 
ā°ā !shio [query]

ā­āā ć Random Anime ć
āā !loli
āā !neko
āā !waifu
āā !shinobu
āā !megumin
āā !bully
āā !cuddle
āā !cry
āā !hug
āā !awoo
āā !kiss
āā !lick
āā !pat
āā !smug
āā !bonk
āā !yeet
āā !blush
āā !smile
āā !wave
āā !highfive
āā !handhold
āā !nom
āā !bite
āā !glomp
āā !slap
āā !kill
āā !happy
āā !wink
āā !poke
āā !dance
ā°ā !cringe

ā­āā ć Voice Change Menu ć
āā !bass
āā !blown
āā !deep
āā !earrape
āā !fast
āā !fat
āā !nightcore
āā !reverse
āā !robot
āā !slow
āā !smooth
ā°ā !tupai

ā­āā ć Storage Menu ć
āā !addvn
āā !listvn
āā !delvn
āā !addimage
āā !listimage
āā !delimage
āā !addvideo
āā !listvideo
āā !delvideo
āā !addstik
āā !delstik
ā°ā !liststik

ā­āā ć Nsfw & Sfw ć
āā !cuddle
āā !foxgirl
āā !kemonomimi2
āā !woof
āā !holo2
āā !hug
āā !kiss
āā !lizard
āā !meowi
āā !neko2
āā !pat
āā !poke
āā !slap
āā !tickle
āā !baka
āā !smug
āā !neko_sfw
āā !hentai
āā !hentai_gif
āā !spank
āā !blowjob
āā !cumarts
āā !eroyuri
āā !eroneko
āā !erokemonomimi
āā !erokitsune
āā !ero
āā !feet
āā !erofeet
āā !feetgif
āā !femdom
āā !futanari
āā !holoero
āā !holo
āā !keta
āā !kitsune
āā !kemonomimi
āā !pussyart
āā !pussywankgif
āā !girl_solo
āā !girl_solo_gif
āā !tits
āā !trap
āā !yuri
āā !avatar2
āā !anal
āā !bj
āā !boobs
āā !classic
āā !cumsluts
āā !kuni
āā !lesbian
āā !neko
āā !neko_gif
āā !ahegao
āā !bdsm
āā !cuckold
āā !cum
āā !foot
āā !gangbang
āā !glasses
āā !jahy
āā !masturbation
āā !nsfw_neko
āā !orgy
āā !panties
āā !tentacles
āā !thighs
ā°ā !zettai

ā­āā ć Ephoto360 Menu ć
āā !youtubegold
āā !youtubesilver
āā !facebookgold
āā !facebooksilver
āā !instagramgold
āā !instagramsilver
āā !twittergold
āā !twittersilver
āā !retrotext
āā !halloweenbats
āā !texthalloween
āā !cardhalloween
āā !birthdaycake
āā !thundertext
āā !icetext
āā !milkcake
āā !snowontext
āā !metalstar
āā !dragonfire
āā !zombie3d
āā !merrycard
āā !generalexam 
āā !viettel
āā !embroider
āā !graffititext
āā !graffititext2
āā !graffititext3
āā !covergraffiti
āā !moderngold
āā !capercut
āā !lovecard
āā !heartflashlight
āā !heartcup
āā !sunglightshadow
āā !graffiti3d
āā !moderngoldsilver
āā !moderngold2
āā !moderngold3
āā !fabrictext
āā !masteryavatar
āā !messagecoffee
āā !announofwin
āā !writeblood
āā !horrorletter
āā !writehorror
āā !shirtclub
āā !angelwing
āā !christmasseason
āā !projectyasuo
āā !lovelycute
āā !womansday
āā !covergamepubg
āā !nameonheart
āā !funnyhalloween
āā !lightningpubg
āā !greetingcardvideo 
āā !christmascard 
āā !galaxybat
āā !writegalaxy
āā !starsnight
āā !noeltext
āā !textcakes
āā !pubgbirthday
āā !galaxywallpaper
āā !pubgglicthvideo 
āā !pubgmascotlogo
āā !realembroidery
āā !vintagetelevision
āā !funnyanimations
āā !glowingtext
āā !textonglass
āā !cartoonstyle
āā !multicolor
āā !watercolor2
āā !textsky
āā !summerbeach
āā !1917text
āā !puppycute
ā°ā !rosebirthday


ā­āā ć Textpro Menu ć
āā !halloween2 text|text2
āā !horror text|text2
āā !game8bit text|text2
āā !layered text|text2
āā !glitch2 text|text2
āā !coolg text|text2
āā !coolwg text|text2
āā !realistic text|text2
āā !space3d text|text2
āā !gtiktok text|text2
āā !stone text|text2
āā !marvel text|text2
āā !marvel2 text|text2
āā !pornhub text|text2
āā !avengers text|text2
āā !metalr text|text2
āā !metalg text|text2
āā !metalg2 text|text2
āā !halloween2 text|text2
āā !lion text|text2
āā !wolf_bw text|text2
āā !wolf_g text|text2
āā !ninja text|text2
āā !3dsteel text|text2
āā !horror2 text|text2
āā !lava text|text2
āā !bagel text|text2
āā !blackpink text
āā !rainbow2 text
āā !water_pipe text
āā !halloween text
āā !sketch text
āā !sircuit text
āā !discovery text
āā !metallic2 text
āā !fiction text
āā !demon text
āā !transformer text
āā !berry text
āā !thunder text
āā !magma text
āā !3dstone text
āā !neon text
āā !glitch text
āā !harry_potter text
āā !embossed text
āā !broken text
āā !papercut text
āā !gradient text
āā !glossy text
āā !watercolor text
āā !multicolor text
āā !neon_devil text
āā !underwater text
āā !bear text
āā !wonderfulg text
āā !christmas text
āā !neon_light text
āā !snow text
āā !cloudsky text
āā !luxury2 text
āā !gradient2 text
āā !summer text
āā !writing text
āā !engraved text
āā !summery text
āā !3dglue text
āā !metaldark text
āā !neonlight text
āā !oscar text
āā !minion text
āā !holographic text
āā !purple text
āā !glossyb text
āā !deluxe2 text
āā !glossyc text
āā !fabric text
āā !neonc text
āā !newyear text
āā !newyear2 text
āā !metals text
āā !xmas text
āā !blood text
āā !darkg text
āā !joker text
āā !wicker text
āā !natural text
āā !firework text
āā !skeleton text
āā !balloon text
āā !balloon2 text
āā !balloon3 text
āā !balloon4 text
āā !balloon5 text
āā !balloon6 text
āā !balloon7 text
āā !steel text
āā !gloss text
āā !denim text
āā !decorate text
āā !decorate2 text
āā !peridot text
āā !rock text
āā !glass text
āā !glass2 text
āā !glass3 text
āā !glass4 text
āā !glass5 text
āā !glass6 text
āā !glass7 text
āā !glass8 text
āā !captain_as2 text
āā !robot text
āā !equalizer text
āā !toxic text
āā !sparkling text
āā !sparkling2 text
āā !sparkling3 text
āā !sparkling4 text
āā !sparkling5 text
āā !sparkling6 text
āā !sparkling7 text
āā !decorative text
āā !chocolate text
āā !strawberry text
āā !koifish text
āā !bread text
āā !matrix text
āā !blood2 text
āā !neonligth2 text
āā !thunder2 text
āā !3dbox text
āā !neon2 text
āā !roadw text
āā !bokeh text
āā !gneon text
āā !advanced text
āā !dropwater text
āā !wall text
āā !chrismast text
āā !honey text
āā !drug text
āā !marble text
āā !marble2 text
āā !ice text
āā !juice text
āā !rusty text
āā !abstra text
āā !biscuit text
āā !wood text
āā !scifi text
āā !metalr text
āā !purpleg text
āā !shiny text 
āā !jewelry text
āā !jewelry2 text
āā !jewelry3 text
āā !jewelry4 text
āā !jewelry5 text
āā !jewelry6 text
āā !jewelry7 text
āā !jewelry8 text
āā !metalh text
āā !golden text
āā !glitter text
āā !glitter2 text
āā !glitter3 text
āā !glitter4 text
āā !glitter5 text
āā !glitter6 text
āā !glitter7 text
āā !metale text
āā !carbon text
āā !candy text
āā !metalb text
āā !gemb text
āā !3dchrome text
āā !metalb2 text
āā !metalg text
ā°ā !metalg text


ā­āā ć Others ć
āā !afk [reason]
āā !translate kode_bahasa text
āā !kalkulator [query]
āā !smeme [text]
āā !smeme2 [text|text]
āā !memegen [text|text]
ā°ā

ā­āā ć Game Menu ć
āā !kuismath
āā !tebakgambar
āā !tebakkata
āā !tebakbendera
āā !tebakkalimat
āā !tebaksiapa
āā !tebakkabupaten
āā !tebakkimia
āā !tebaklirik
āā !tebaktebakan
āā !tekateki
āā !susunkata
ā°ā !caklontong


ā­āā ć Asupan Menu ć
āā !chika
āā !delvira
āā !ayu
āā !bunga
āā !aura
āā !nisa
āā !ziva
āā !yana
āā !viona
āā !syania
āā !riri
āā !syifa
āā !mama_gina
āā !alcakenya
āā !mangayutri
āā !rikagusriani
āā !asupan
āā !bocil
āā !geayubi
āā !santuy
āā !ukhty
ā°ā !syifa

ā­āā ć Telegram Sticker ć
āā !awoawo
āā !benedict
āā !chat
āā !dbfly
āā !dino_kuning
āā !doge
āā !gojosatoru
āā !hope_boy
āā !jisoo
āā !kr_robot
āā !kucing
āā !lonte
āā !manusia_lidi
āā !menjamet
āā !meow
āā !nicholas
āā !patrick
āā !popoci
āā !sponsbob
āā !kawan_sponsbob
ā°ā !tyni

ā­āā ć Random Cewe ć
āā !china 
āā !indonesia 
āā !malaysia 
āā !thailand 
āā !korea 
āā !japan 
āā !vietnam 
āā !jenni 
āā !jiso 
āā !lisa  
ā°ā !rose

ā­āā ć Logo Menu ć
āā !coverbannerlol text|heroes
āā !pubglogomaker text|style
āā !colorfulpubg text|color
āā !astronotspace text|style
āā !wallpaperaov text|heroes
āā !maketeamlogo text|style
āā !circlemarcotteam text|logo
āā !wallpaperml text|heroes
āā !dragonballfb text|character
āā !bannerofaov text|character
āā !effect3donbeach text|background
āā !cutegirlgamer text|logo
āā !footballteam text|logo
āā !beautifulshimmering text|champion
āā !pubgcutelogo text|logo
āā !elegantrotation text|logo
āā !logogamingassasin text|logo
āā !introvideomaker text|logo
āā !gaminglogo4fvs text|logo
āā !blueneon text|logo
āā !metalmascot text|logo
āā !anonymous2 text|style
āā !lolpentakill text|style
āā !avatarleagueofking text|style
āā !avatarff text|character
āā !overwatchwallpaper text|character
āā !rovwallpaperhd text|hero
āā !rovwallpaper text|avatar
āā !beautifulgalaxylol text|style
āā !crossfirecover text|character
āā !lolwallpaper text|wallpaper
āā !coverdota2 text|heroes
āā !coverleagueofking text|character
āā !avatar3q360 text|avatar
āā !coverofwarface text|character
āā !newlolavatar text|avatar
āā !csgocover text|background
āā !coverloknew text|hero
āā !coverfblol text|letters
āā !overwatchcover text|hero
āā !crossfirestyle text|avatar
āā !avatarlolbyname text|style
āā !lolcoverbyname text|avatar
āā !cyberhunterfb text|character
āā !coverfreefirefb text|character
āā !gamingmascot text|style
āā !coveronepiecefb text|character
āā !bannerytcsgo text|banner
āā !fbgamepubgcover text|template
āā !banneroflol text|text2|banner
āā !bannerofaov2 text|text2|banner
āā !teamlogo text|text2|background
āā !companylogo2 text|text2|background
āā !companylogo text|text2|background
āā !gradientlogo text|text2|background
āā !pencilsketch text|text2|icon
āā !gunlogogaming text|text2|background
āā !banneroffreefire text|text2|background
āā !letterlogos text|text2|thumb
āā !bannerofoverwatch text|text2|background
āā !bannerofapex text|text2|background
āā !bannerofpubg text|text2|background
āā !mascotstyle text|text2|thumb
āā !logoaccording text|text2|thumb
ā°ā !avataroverwatch text|text2|thumb


ā­āā ć Islamic Menu ć
āā !asmaulhusna
āā !kisahnabi [nabi]
āā !jadwalshalat [daerah]
āā !randomquran
āā !randomquran2
āā !listsurah
āā !tafsirsurah [surah]
ā°ā !alquranaudio [surah|ayat]

ā­āā ć Sound Menu ć
āā !sound1
āā !sound2
āā !sound3
āā !sound4
āā !sound5
āā !sound6
āā !sound7
āā !sound8
āā !sound9
āā !sound10
āā !sound11
āā !sound12
āā !sound13
āā !sound14
āā !sound15
āā !sound16
āā !sound17
āā !sound18 
āā !sound19
āā !sound20
āā !sound21
āā !sound22
āā !sound23
āā !sound24
āā !sound25
āā !sound26
āā !sound27
āā !sound28
āā !sound29
āā !sound30
āā !sound31
āā !sound32
āā !sound33
āā !sound34
āā !sound35
āā !sound36
āā !sound37
āā !sound38
āā !sound39
āā !sound40
āā !sound41
āā !sound42
āā !sound43
āā !sound44
āā !sound45
āā !sound46
āā !sound47
āā !sound48
āā !sound49
āā !sound50
āā !sound51
āā !sound52
āā !sound53
āā !sound54
āā !sound55
āā !sound56
āā !sound57
āā !sound58
āā !sound59
āā !sound60
āā !sound61
āā !sound62
āā !sound63
āā !sound64
āā !sound65
āā !sound66
āā !sound67
āā !sound68
āā !sound69
ā°ā !sound70

ā­āā ć TqTo ć 
āā My God
āā My Parents
āā Fatih A.
āā Ferdi
āā DikaArdnt
āā Mhankbarbar
āā Nurutomo
āā Rashid
āā ZeeoneOfc
āā Penyedia Module
ā°ā And All Support
    `
}

exports.rules = (prefix) => {
    return `
*āā ć RULES AND FAQ ć āā*

1. Jangan spam bot. š
2. Jangan telepon bot. āļø
3. Jangan membandingkan bot š

šÆļø Bot tidak atau lambat merespon ?
ā”ļø Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

šÆļø Dimana saya bisa mendapatkan Script dari bot ini ?
ā”ļø Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

šÆļø Boleh saya menambah ke grup?
ā”ļø Untuk itu tergantung dari owner bot sendiri

šÆļø Prefixnya apa ya?
ā”ļø Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

ā ļø Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`š©šŗšššŗš ššššŗ ššššš ššŗš š¤
	
ā­ š­šŗššŗ :
āā š“ššš :
āā š¦š¾šš½š¾š :
āā š šššš :
ā°ā šÆšŗšššš šššš¾š šššš ššŗ ššŗk ~`
}
exports.leave = () =>{
	return`Yah kok out š£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ć SOURCE CODE ć ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLBVrgpCpAnw2ZHjdSrdjasj6crrD1RBgm
`
}
exports.tos = (ownernomer) => {
    return `
*-------ć DONATE ć -------*

Hai kak āŗļø 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti š
Buat kalian yang sudah donasi bisa kirim bukti
donasi ke owner agar bisa di masukkan ke list donasi

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`ā­āā ć Bot Info ć 
āā !owner
āā !rules
āā !sc
āā !ping
āā !runtime
āā !botstatus
ā°ā !donate
`}

exports.ownermenu = (prefix) =>{
return`ā­āā ć Owner ć 
āā !setmenu [query]
āā !setmenu katalog
āā !setmenu katalog2
āā !setmenu list
āā !setwm packname|author
āā !sendsesi
āā !listpc
āā !listgc
āā !broadcast [text]
āā !bc [text]
āā !bcgc 
āā !bcimage
āā !bcaudio
āā !bcstiker
āā !bcvn
āā !bcvideo
āā !banuser
āā !unban
āā !banned
āā !listbanned
āā !block
āā !ublock
āā !listblock
āā !addpremium
āā !delpremium
āā !listpremium
āā !nsfw [on/off]
āā !mute [on/off]
āā !autoblok212 [on/off]
āā !banchat
āā !unbanchat
āā !autorespond [on/off]
āā !antiviewonce [on/off]
āā !autobio [on/off]
āā !anticall [on/off]
āā !join [link]
āā !self
āā !public [only bot]
āā !del [reply pesan bot]
āā !pppanjang
āā !setpppanjang
ā°ā !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`ā­āā ć Database ć 
āā !setcmd [reply stiker]
āā !delcmd [reply stiker]
āā !listcmd
āā !absen
āā !cekabsen
āā !deleteabsen
āā !absenstart
āā !addmsg [nama file]
āā !getmsg [nama file]
āā !listmsg
ā°ā !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`ā­āā ć Group ć 
āā !addsewa
āā !delsewa
āā !listsewa
āā !ceksewa
āā !delsewa
āā !register
āā !unregister
āā !ceksn
āā !listonline
āā !sider
āā !wm packname|author
āā !infochat
āā !setdesk [text]
āā !setppgrup [reply image]
āā !pppanjanggc
āā !setpppanjanggc
āā !revoke
āā !leave
āā !add [62***]
āā !kick @tag
āā !leave
āā !linkgc
āā !welcome [on/off]
āā !goodbye [on/off]
āā !demotedetect [on/off]
āā !promotedetect  [on/off]
āā !setwelcome
āā !updatewelcome
āā !delwelcome
āā !cekwelcome
āā !setgoodbye
āā !updategoodbye
āā !delgoodbye
āā !cekgoodbye
āā !setpromote
āā !updatepromote
āā !setdemote
āā !updatedemote
āā !cekpromote
āā !cekdemote
āā !delpromote
āā !deldemote
āā !nsfw [on/off]
āā !antilink [on/off]
āā !take packname|author
āā !group [open/close]
āā !tagall [text]
ā°ā !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`ā­āā ć Anime ć 
āā !quotesanime
āā !anime [query]
āā !animeinfo
āā !manga [query]
ā°ā !character [query]
`}

exports.tag = (prefix) =>{
	return`ā­āā ć Tag ć 
āā !stickertag
āā !videotag [query]
āā !vntag [query]
ā°ā !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`ā­āā ć Stalking ć 
āā !igstalk [username]
āā !ghstalk [username]
ā°ā !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`ā­āā ć Search ć 
āā !ytsearch [query]
āā !wallpaper [query]
āā !google [query]
āā !wikimedia [query]
āā !apksearch
āā !findapk
āā !hentai
āā !wattpad [query]
āā !webtoons [query]
āā !drakor [query]
āā !brainly [query]
ā°ā !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`ā­āā ć Converter ć 
āā !emoji [š­]
āā !emojimix [š­+š©]
āā !toaudio [video]
āā !tomp3 [video]
āā !tovn [video]
āā !stiker [reply image]
āā !tourl [image/video]
āā !togif [sticker]
āā !tomp4 [sticker]
ā°ā${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`ā­āā ć Image Effect ć 
āā !wanted [reply image/stiker]
āā !utatoo [reply image/stiker]
āā !unsharpen [reply image/stiker]
āā !thanos [reply image/stiker]
āā !sniper [reply image/stiker]
āā !sharpen [reply image/stiker]
āā !sepia [reply image/stiker]
āā !scary [reply image/stiker]
āā !rip [reply image/stiker]
āā !redple [reply image/stiker]
āā !rejected [reply image/stiker]
āā !posterize [reply image/stiker]
āā !ps4 [reply image/stiker]
āā !pixelize [reply image/stiker]
āā !missionpassed [reply image/stiker]
āā !moustache [reply image/stiker]
āā !lookwhatkarenhave [reply image/stiker]
āā !jail [reply image/stiker]
āā !invert [reply image/stiker]
āā !instagram [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !glitch [reply image/stiker]
āā !gay [reply image/stiker]
āā !frame [reply image/stiker]
āā !fire [reply image/stiker]
āā !distort [reply image/stiker]
āā !dictator [reply image/stiker]
āā !deepfry [reply image/stiker]
āā !ddungeon [reply image/stiker]
āā !circle [reply image/stiker]
āā !challenger [reply image/stiker]
āā !burn [reply image/stiker]
āā !brazzers [reply image/stiker]
ā°ā !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`ā­āā ć Sticker Effect ć 
āā !jail [reply image/stiker]
āā !red [reply image/stiker]
āā !gay [reply image/stiker]
āā !bloo [reply image/stiker]
āā !blue [reply image/stiker]
āā !sepia [reply image/stiker]
āā !green [reply image/stiker]
āā !glass [reply image/stiker]
āā !invert [reply image/stiker]
āā !blurple [reply image/stiker]
āā !blurple2 [reply image/stiker]
āā !wasted [reply image/stiker]
āā !passed [reply image/stiker]
āā !triggered [reply image/stiker]
āā !comrade [reply image/stiker]
āā !greyscale [reply image/stiker]
āā !threshold [reply image/stiker]
āā !brightness [reply image/stiker]
ā°ā !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`ā­āā ć Download ć 
āā !tiktok [link]
āā !tiktoknowm [link]
āā !tiktokwm [link]
āā !tiktokaudio [link]
āā !ytdl [link]
āā !play [query]
āā !ytmp3 [link]
āā !ytshortmp3 [link]
āā !ytmp4 [link]
āā !ytshorts [link]
āā !facebook [link]
āā !facebooksd [link]
āā !facebookhd [link]
āā !fbaudio [link]
āā !igstory [username]
āā !igdl [link]
āā !igphoto [link]
āā !igvideo [link]
āā !igreels [link]
āā !igtv [link]
āā !soundcloud [link]
āā !gitclone [link repo]
āā !gitrepo [username repo branch]
āā !mediafire [link]
ā°ā !twitter link
`
}

exports.ranime = (prefix) =>{
	return`ā­āā ć Random Anime ć
āā !loli
āā !neko
āā !waifu
āā !shinobu
āā !megumin
āā !bully
āā !cuddle
āā !cry
āā !hug
āā !awoo
āā !kiss
āā !lick
āā !pat
āā !smug
āā !bonk
āā !yeet
āā !blush
āā !smile
āā !wave
āā !highfive
āā !handhold
āā !nom
āā !bite
āā !glomp
āā !slap
āā !kill
āā !happy
āā !wink
āā !poke
āā !dance
ā°ā !cringe
`
}

exports.nsfw = (prefix) =>{
	return`ā­āā ć Nsfw & Sfw ć
āā !cuddle
āā !feed
āā !foxgirl
āā !kemonomimi2
āā !woof
āā !holo2
āā !hug
āā !kiss
āā !lizard
āā !meowi
āā !neko2
āā !pat
āā !poke
āā !slap
āā !tickle
āā !baka
āā !smug
āā !neko_sfw
āā !hentai
āā !hentai_gif
āā !spank
āā !blowjob
āā !cumarts
āā !eroyuri
āā !eroneko
āā !erokemonomimi
āā !erokitsune
āā !ero
āā !feet
āā !erofeet
āā !feetgif
āā !femdom
āā !futanari
āā !hentai
āā !holoero
āā !holo
āā !keta
āā !kitsune
āā !kemonomimi
āā !pussyart
āā !pussywankgif
āā !girl_solo
āā !girl_solo_gif
āā !tits
āā !trap
āā !yuri
āā !avatar2
āā !anal
āā !bj
āā !boobs
āā !classic
āā !cumsluts
āā !kuni
āā !lesbian
āā !neko
āā !neko_gif
āā !ahegao
āā !bdsm
āā !cuckold
āā !cum
āā !foot
āā !gangbang
āā !glasses
āā !jahy
āā !masturbation
āā !nsfw_neko
āā !orgy
āā !panties
āā !tentacles
āā !thighs
ā°ā !zettai
`
}

exports.textpro = (prefix) =>{
	return`ā­āā ć Textpro Menu ć
āā !halloween2 text|text2
āā !horror text|text2
āā !game8bit text|text2
āā !layered text|text2
āā !glitch2 text|text2
āā !coolg text|text2
āā !coolwg text|text2
āā !realistic text|text2
āā !space3d text|text2
āā !gtiktok text|text2
āā !stone text|text2
āā !marvel text|text2
āā !marvel2 text|text2
āā !pornhub text|text2
āā !avengers text|text2
āā !metalr text|text2
āā !metalg text|text2
āā !metalg2 text|text2
āā !halloween2 text|text2
āā !lion text|text2
āā !wolf_bw text|text2
āā !wolf_g text|text2
āā !ninja text|text2
āā !3dsteel text|text2
āā !horror2 text|text2
āā !lava text|text2
āā !bagel text|text2
āā !blackpink text
āā !rainbow2 text
āā !water_pipe text
āā !halloween text
āā !sketch text
āā !sircuit text
āā !discovery text
āā !metallic2 text
āā !fiction text
āā !demon text
āā !transformer text
āā !berry text
āā !thunder text
āā !magma text
āā !3dstone text
āā !neon text
āā !glitch text
āā !harry_potter text
āā !embossed text
āā !broken text
āā !papercut text
āā !gradient text
āā !glossy text
āā !watercolor text
āā !multicolor text
āā !neon_devil text
āā !underwater text
āā !bear text
āā !wonderfulg text
āā !christmas text
āā !neon_light text
āā !snow text
āā !cloudsky text
āā !luxury2 text
āā !gradient2 text
āā !summer text
āā !writing text
āā !engraved text
āā !summery text
āā !3dglue text
āā !metaldark text
āā !neonlight text
āā !oscar text
āā !minion text
āā !holographic text
āā !purple text
āā !glossyb text
āā !deluxe2 text
āā !glossyc text
āā !fabric text
āā !neonc text
āā !newyear text
āā !newyear2 text
āā !metals text
āā !xmas text
āā !blood text
āā !darkg text
āā !joker text
āā !wicker text
āā !natural text
āā !firework text
āā !skeleton text
āā !balloon text
āā !balloon2 text
āā !balloon3 text
āā !balloon4 text
āā !balloon5 text
āā !balloon6 text
āā !balloon7 text
āā !steel text
āā !gloss text
āā !denim text
āā !decorate text
āā !decorate2 text
āā !peridot text
āā !rock text
āā !glass text
āā !glass2 text
āā !glass3 text
āā !glass4 text
āā !glass5 text
āā !glass6 text
āā !glass7 text
āā !glass8 text
āā !captain_as2 text
āā !robot text
āā !equalizer text
āā !toxic text
āā !sparkling text
āā !sparkling2 text
āā !sparkling3 text
āā !sparkling4 text
āā !sparkling5 text
āā !sparkling6 text
āā !sparkling7 text
āā !decorative text
āā !chocolate text
āā !strawberry text
āā !koifish text
āā !bread text
āā !matrix text
āā !blood2 text
āā !neonligth2 text
āā !thunder2 text
āā !3dbox text
āā !neon2 text
āā !roadw text
āā !bokeh text
āā !gneon text
āā !advanced text
āā !dropwater text
āā !wall text
āā !chrismast text
āā !honey text
āā !drug text
āā !marble text
āā !marble2 text
āā !ice text
āā !juice text
āā !rusty text
āā !abstra text
āā !biscuit text
āā !wood text
āā !scifi text
āā !metalr text
āā !purpleg text
āā !shiny text 
āā !jewelry text
āā !jewelry2 text
āā !jewelry3 text
āā !jewelry4 text
āā !jewelry5 text
āā !jewelry6 text
āā !jewelry7 text
āā !jewelry8 text
āā !metalh text
āā !golden text
āā !glitter text
āā !glitter2 text
āā !glitter3 text
āā !glitter4 text
āā !glitter5 text
āā !glitter6 text
āā !glitter7 text
āā !metale text
āā !carbon text
āā !candy text
āā !metalb text
āā !gemb text
āā !3dchrome text
āā !metalb2 text
āā !metalg text
ā°ā !metalg text
`
}


exports.other = (prefix) =>{
return`ā­āā ć Others ć
āā !ttp [text]
āā !attp [text]
āā !afk [reason]
āā !translate kode_bahasa text
āā !kalkulator [query]
āā !smeme [text]
āā !smeme2 [text|text]
ā°ā !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`ā­āā ć Game Menu ć
āā !kuismath
āā !tebakgambar
āā !tebakkata
āā !tebakbendera
āā !tebakkalimat
āā !tebaksiapa
āā !tebakkabupaten
āā !tebakkimia
āā !tebaklirik
āā !tebaktebakan
āā !tekateki
āā !susunkata
ā°ā !caklontong
`
}
exports.asupan = (prefix) =>{
return`ā­āā ć Asupan Menu ć
āā !chika
āā !delvira
āā !ayu
āā !bunga
āā !aura
āā !nisa
āā !ziva
āā !yana
āā !viona
āā !syania
āā !riri
āā !syifa
āā !mama_gina
āā !alcakenya
āā !mangayutri
āā !rikagusriani
āā !asupan
āā !bocil
āā !geayubi
āā !santuy
āā !ukhty
ā°ā !syifa
`
}
exports.cecan = (prefix) =>{
return`ā­āā ć Random Cewe ć
āā !china 
āā !indonesia 
āā !malaysia 
āā !thailand 
āā !korea 
āā !japan 
āā !vietnam 
āā !jenni 
āā !jiso 
āā !lisa  
ā°ā !rose
`
}

exports.tqto = () =>{
	return`ā­āā ć TqTo ć 
āā My God
āā My Parents
āā Fatih A.
āā Ferdi
āā DikaArdnt
āā Mhankbarbar
āā Nurutomo
āā Rashid
āā ZeeoneOfc
āā Penyedia Module
ā°ā And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`ā­āā ć Primbon ć
āā !nomorhoki 887435047326
āā !artimimpi [query]
āā !artinama [query]
āā !ramaljodoh
āā !ramaljodohbali
āā !suamiistri
āā !ramalcinta
āā !cocoknama
āā !pasangan
āā !jadiannikah
āā !sifatusaha
āā !rezeki
āā !pekerjaan
āā !nasib
āā !penyakit
āā !tarot
āā !fengshui
āā !haribaik
āā !harisangar
āā !harisial
āā !nagahari
āā !arahrezeki
āā !peruntungan
āā !weton
āā !karakter
āā !keberuntungan
āā !memancing
āā !masasubur
āā !zodiak 
ā°ā !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`ā­āā ć Telegram Sticker ć
āā !awoawo
āā !benedict
āā !chat
āā !dbfly
āā !dino_kuning
āā !doge
āā !gojosatoru
āā !hope_boy
āā !jisoo
āā !kr_robot
āā !kucing
āā !lonte
āā !manusia_lidi
āā !menjamet
āā !meow
āā !nicholas
āā !patrick
āā !popoci
āā !sponsbob
āā !kawan_sponsbob
ā°ā !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`ā­āā ć Ephoto360 Menu ć
āā !youtubegold text
āā !youtubesilver text
āā !facebookgold text
āā !facebooksilver text
āā !instagramgold text
āā !instagramsilver text
āā !twittergold text
āā !twittersilver text
āā !retrotext text
āā !halloweenbats text
āā !texthalloween text
āā !cardhalloween text
āā !birthdaycake text
āā !thundertext text
āā !icetext text
āā !milkcake text
āā !snowontext text
āā !metalstar text
āā !dragonfire text
āā !zombie3d text
āā !merrycard text
āā !generalexam text 
āā !viettel text
āā !embroider text
āā !graffititext text
āā !graffititext2 text
āā !graffititext3 text
āā !covergraffiti text
āā !moderngold text
āā !capercut text
āā !lovecard text
āā !heartflashlight text
āā !heartcup text
āā !sunglightshadow text
āā !graffiti3d text
āā !moderngoldsilver text
āā !moderngold2 text
āā !moderngold3 text
āā !fabrictext text
āā !masteryavatar text
āā !messagecoffee text
āā !announofwin text
āā !writeblood text
āā !horrorletter text
āā !writehorror text
āā !shirtclub text
āā !angelwing text
āā !christmasseason text
āā !projectyasuo text
āā !lovelycute text
āā !womansday text
āā !covergamepubg text
āā !nameonheart text
āā !funnyhalloween text
āā !lightningpubg text
āā !greetingcardvideo text 
āā !christmascard text 
āā !galaxybat text
āā !writegalaxy text
āā !starsnight text
āā !noeltext text
āā !textcakes text
āā !pubgbirthday text
āā !galaxywallpaper text
āā !pubgglicthvideo text 
āā !pubgmascotlogo text
āā !realembroidery text
āā !vintagetelevision text
āā !funnyanimations text
āā !glowingtext text
āā !textonglass text
āā !cartoonstyle text
āā !multicolor text
āā !watercolor2 text
āā !textsky text
āā !summerbeach text
āā !1917text text
āā !puppycute text
āā !rosebirthday text
āā !steellettering text|text2
āā !letterstext text|text2
āā !barcashirt text|text2
āā !premiercup text|text2
āā !stylepoligon text|text2
āā !lifebuoys text|text2
ā°ā !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`ā­āā ć Logo Menu ć
āā !coverbannerlol text|heroes
āā !pubglogomaker text|style
āā !colorfulpubg text|color
āā !astronotspace text|style
āā !wallpaperaov text|heroes
āā !maketeamlogo text|style
āā !circlemarcotteam text|logo
āā !wallpaperml text|heroes
āā !dragonballfb text|character
āā !bannerofaov text|character
āā !effect3donbeach text|background
āā !cutegirlgamer text|logo
āā !footballteam text|logo
āā !beautifulshimmering text|champion
āā !pubgcutelogo text|logo
āā !elegantrotation text|logo
āā !logogamingassasin text|logo
āā !introvideomaker text|logo
āā !gaminglogo4fvs text|logo
āā !blueneon text|logo
āā !metalmascot text|logo
āā !anonymous2 text|style
āā !lolpentakill text|style
āā !avatarleagueofking text|style
āā !avatarff text|character
āā !overwatchwallpaper text|character
āā !rovwallpaperhd text|hero
āā !rovwallpaper text|avatar
āā !beautifulgalaxylol text|style
āā !crossfirecover text|character
āā !lolwallpaper text|wallpaper
āā !coverdota2 text|heroes
āā !coverleagueofking text|character
āā !avatar3q360 text|avatar
āā !coverofwarface text|character
āā !newlolavatar text|avatar
āā !csgocover text|background
āā !coverloknew text|hero
āā !coverfblol text|letters
āā !overwatchcover text|hero
āā !crossfirestyle text|avatar
āā !avatarlolbyname text|style
āā !lolcoverbyname text|avatar
āā !cyberhunterfb text|character
āā !coverfreefirefb text|character
āā !gamingmascot text|style
āā !coveronepiecefb text|character
āā !bannerytcsgo text|banner
āā !fbgamepubgcover text|template
āā !banneroflol text|text2|banner
āā !bannerofaov2 text|text2|banner
āā !teamlogo text|text2|background
āā !companylogo2 text|text2|background
āā !companylogo text|text2|background
āā !gradientlogo text|text2|background
āā !pencilsketch text|text2|icon
āā !gunlogogaming text|text2|background
āā !banneroffreefire text|text2|background
āā !letterlogos text|text2|thumb
āā !bannerofoverwatch text|text2|background
āā !bannerofapex text|text2|background
āā !bannerofpubg text|text2|background
āā !mascotstyle text|text2|thumb
āā !logoaccording text|text2|thumb
ā°ā !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`ā­āā ć Islamic Menu ć
āā !asmaulhusna
āā !kisahnabi [nabi]
āā !jadwalshalat [daerah]
āā !randomquran
āā !randomquran2
āā !listsurah
āā !tafsirsurah [surah]
ā°ā !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`ā­āā ć Anonymous ć
āā !menfess
āā !anonymous 
āā !start
āā !skip [daerah]
ā°ā !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`ā­āā ć Store Menu ć
āā !list
āā !addlist [key|respond]
āā !dellist [key]
āā !update [key|respond]
āā !store
āā !kali
āā !bagi
āā !tambah
āā !kurang
āā !kalkulator
āā !setproses
āā !updateproses
āā !cekproses
āā !delproses
āā !setdone
āā !updatedone
āā !cekdone
āā !deldone
āā !pay
āā !setcaptionpay
āā !setpaysewa
āā !proses
ā°ā !done
`
}

exports.voiceChange = (prefix) =>{
	return`ā­āā ć Voice Change Menu ć
āā !bass
āā !blown
āā !deep
āā !earrape
āā !fast
āā !fat
āā !nightcore
āā !reverse
āā !robot
āā !slow
āā !smooth
ā°ā !tupai
`
}
exports.storagemenu = (prefix) =>{
	return`ā­āā ć Storage Menu ć
āā !addvn
āā !listvn
āā !delvn
āā !addimage
āā !listimage
āā !delimage
āā !addvideo
āā !listvideo
āā !delvideo
āā !addstik
āā !delstik
ā°ā !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`ā­āā ć Rpg Games ć
āā !adventure
āā !weekly
āā !use
āā !transfer
āā !slot
āā !shop
āā !profile
āā !pasar
āā !ojek
āā !open
āā !nguli
āā !narik
āā !nabung
āā !monthly
āā !mining
āā !merampok
āā !mancing
āā !kolam
āā !koboy
āā !kerja
āā !kandang
āā !judi
āā !inventory
āā !hourly
āā !fishop
āā !feed
āā !duel
āā !daily
āā !craft
āā !cooldown
āā !cook
āā !collect
āā !chop
āā !casino
āā !buy
āā !bank 
āā !bansos
āā !berdagang
āā !berkebon
ā°ā !build
`
}

exports.photooxy = (prefix)=>{
	return`ā­āā ć Photooxy Menu ć
āā !battlegrounds-logo
āā !battlefield4
āā !text-8bit
āā !typography-flower 
āā !under-flower 
āā !bevel-text 
āā !silk-text 
āā !sweet-andy 
āā !smoke-typography 
āā !carvedwood 
āā !scary-cemetery 
āā !royallook 
āā !coffeecup2 
āā !illuminated 
āā !harry-potter2 //
āā !woodblack //
āā !butterfly-reflection //
āā !watermelon // 
āā !striking // 
āā !metallicglow //
āā !rainbow-text 
āā !birthday-cake 
āā !embroidery // 
āā !crisp 
āā !flaming 
āā !furtext 
āā !nightsky 
āā !glow-rainbow 
āā !gradient-avatar 
āā !white-cube // 
āā !honey-text // 
āā !vintage-style //
āā !glowing-3d // 
āā !army-camouflage 
āā !graffiti-cover 
āā !rainbow-shine 
āā !smoky-neon 
āā !quotes-underfall //
āā !layered-leaves 
āā !vector-nature 
āā !yellow-rose 
āā !love-text 
āā !underwater-ocean 
āā !nature-text 
āā !wolf-metal 
āā !summer-text 
āā !wooden-board //
āā !flower-heart
āā !quote-wood 
āā !love-text 
āā !quotes-undergrass 
āā !naruto-banner 
āā !love-message 
āā !textoncup2 
āā !burn-paper 
āā !smoke 
āā !romantic-messages 
āā !shadow-sky 
āā !text-cup 
ā°ā !coffecup
`
}
exports.soundmenu = (prefix) =>{
return`ā­āā ć Sound Menu ć
āā !sound1
āā !sound2
āā !sound3
āā !sound4
āā !sound5
āā !sound6
āā !sound7
āā !sound8
āā !sound9
āā !sound10
āā !sound11
āā !sound12
āā !sound13
āā !sound14
āā !sound15
āā !sound16
āā !sound17
āā !sound18 
āā !sound19
āā !sound20
āā !sound21
āā !sound22
āā !sound23
āā !sound24
āā !sound25
āā !sound26
āā !sound27
āā !sound28
āā !sound29
āā !sound30
āā !sound31
āā !sound32
āā !sound33
āā !sound34
āā !sound35
āā !sound36
āā !sound37
āā !sound38
āā !sound39
āā !sound40
āā !sound41
āā !sound42
āā !sound43
āā !sound44
āā !sound45
āā !sound46
āā !sound47
āā !sound48
āā !sound49
āā !sound50
āā !sound51
āā !sound52
āā !sound53
āā !sound54
āā !sound55
āā !sound56
āā !sound57
āā !sound58
āā !sound59
āā !sound60
āā !sound61
āā !sound62
āā !sound63
āā !sound64
āā !sound65
āā !sound66
āā !sound67
āā !sound68
āā !sound69
ā°ā !sound70
`
}


