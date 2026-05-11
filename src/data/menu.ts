export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  badge?: string;
  featured?: boolean;
}

export const categories = [
  { id: 'barchasi', name: 'Barchasi' },
  { id: 'rollar', name: 'Rollar' },
  { id: 'sushilar', name: 'Sushilar' },
  { id: 'ichimliklar', name: 'Ichimliklar' },
  { id: 'sashimi', name: 'Sashimi' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'roll-1',
    name: "Filadelfiya Lyuks",
    description: "Yangi losos balig'i, qaymoqli pishloq, bodring va avokado bilan klassik lazzat.",
    price: "125,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOPBM9mAgu3_J2M9QPeLYZbK2p6PyTu8Ognd0T4nlcVNu2XD3tld4OiWTAohnr5I2sm2pe5ZZXpqoikz_QeH2ejkYSO9Y6B8KsvSEeMwjhFov_uQwuzeRgnr-3nX1tXKsxOeYGDES6jDJ_QFiG5f9Zjy1ny5OnqFsC2ycJCYVFPXFXlfZSKNfsnyrzuMR6vwLbpjg9dg27Hnr2vdyAvVtlcsGOAAT1vutDEd7UrrFbztBlXXLu5gRc1k7ttSniY5GjDgfDGU5OTCw4",
    category: 'rollar',
    badge: "Chef's Choice",
    featured: true,
  },
  {
    id: 'roll-2',
    name: "Achiq Tuna",
    description: "Tuna balig'i, achchiq sous va kunchut bilan qoplangan uramaki.",
    price: "95,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfZ7s1a1OpIlRbxzjNTZB4THVxakD-QSAUbjKOXmI7V7984htktS_AbhCmOQozTBXj-xHLiUbxBt_l0Ld74v8b5hKM7j8fJfw7hbYoJWY4oDzxfv6C4KGMPi3MVvOJUa_sPHraMdhydQNv1XLTGCvDtlX4YGkzRUB33pkkoXz4A5C_ofdKSTk-WN9i7I--oBRM9PlyKgPVMp8liGQ0DkzlHlvoIAsk-ZgtX9bHd4gVZQvtOK_k1TK0eLVXMFldw-9elkSVnDFbAvvJ",
    category: 'rollar',
    badge: "Achiq",
  },
  {
    id: 'sushi-1',
    name: "Nigiri Losos",
    description: "Eng sara losos bo'lagi bilan klassik nigiri (2 dona).",
    price: "45,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdebvPT3PBPw7oFqN8ckGE4MgNWbR8o7lIxSMS-OTtGf4DZaTShuH28P07eV8rFdzaIJw6CbyK646yiD6nW60X4wxqbGkSsCDgBMoT7sDNJ6VR9M86krKzd6ZZHp1s3hHHBtcfVvkdWzBQ0yKA1JmfOrF8DP_zk8Xm0_encIQ_atcY771mci4Z0sbjgBGBhf5MI_pkNqbwMUy0Gh-nEFNZFJ0R-7AOszf-YzkdwdwTr6GyeQX3NQxYFGm2q2FRaw5dOZUlWEOgPRsj",
    category: 'sushilar',
  },
  {
    id: 'sushi-2',
    name: "Nigiri Unagi",
    description: "Dudlangan ugor balig'i va shirin unagi sousi.",
    price: "55,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIxL7ZamtV5lRtw3AQtsKXT9bXZmDW-KtZKcQqx25d2zOKOwjgJyGKg6hFr3l6Z1mGRipQc2DayqWMM4eqjVVEIRZdtZWx36UttgrGhXIzQSxWGp4hf7zt1pOAfOLm1Kpv6x-TzCfhy7hfkVYwm2M5DFo_yuuXaQDmvVeA2COozg9DhhiJ3rp27tnFzxRn5uQ5q5p5mQEF8GhOtAWvx8SyX4nMrfR-WPIDf31la55DwcFwHKGXGGmkoEHQEP_2R3IE6nzydQEJcjal",
    category: 'sushilar',
  },
  {
    id: 'sushi-3',
    name: "Nigiri Ebi",
    description: "Qaynatilgan krevetka bilan tayyorlangan nigiri.",
    price: "48,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4WhjrRucLYzWUbUZSDT1B2BqzqcBJuAqDnSFA3-1FHiNtQLa-_q0azmuDHeFbF90uhElWpDlpSb1Vv_2xT_eA88R6xJbury-LFwxYVdxOxsBG0GjJ9fu-kwMFwdI0xBwcDh47RMjPK2eXacKtO0HIpoR8dNuzNvVbEO-OZlgm4k4PCveJbCfTtQf4mffv7FiWUKmu8tJyXnhkrI4ebvqknqzhklr8fH2h53HdAg9lfQ-yDYIkM1_Z6vt_Rzj03VKhtYKTx8vlAv3",
    category: 'sushilar',
  },
  {
    id: 'drink-1',
    name: "Sencha Choyi",
    description: "An'anaviy yapon yashil choyi, tinchlantiruvchi ta'm.",
    price: "35,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWp0L_GgyYKPjV7WxEcyv04JRIhI5n2yhOh-vMYNsmvJ-DfsAK-jPRdCZ1RFFggyzJPMu8R3ocL_9_4N4XgGCTjmcSBYPD8APNtlJP2EJU6up0Z_aee0eaVPdHyOIC5Dv2bu_leHuayAP9vOdr6zM_aNCfxUXvNpGDYX6ivjpEk43JQmS1Uh27XywDv399Gl4owyq4UquudoGao9cwWjTBb7XlsvGkd4FjMBq5E5CHc47uGRXRIFaxpW9MTU0HOSuXpkHeKzc51zNQ",
    category: 'ichimliklar',
  },
  {
    id: 'drink-2',
    name: "Yuzu Limonad",
    description: "Yapon limoni (yuzu) bilan tetiklantiruvchi ichimlik.",
    price: "42,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOt8V27KgRA_G1aNJkuFnIKbty36XjLq-HgkrUhpgmeXkFbyVGndHkGwyyf_7R4hh4vUYoEUlQSc-EK_kjtzzE1sNH9LNkwBHC-O1CRrUAoNUDqIJ8_2hUrcf0F7OiKtdiBTrnuOKP3_UX99Om4sunXwz_jCfErvwgI7ulOWkUeHLLgpo3upI5L1aC_x1zFZE_Yea7iQVrPUzjrvOocnSVxdovGrahwaO9UFPf6AmZJc6B_x4YwWwdM1MEsOGwS61UPunmJmaMOikI",
    category: 'ichimliklar',
  },
];
