import type { Actress } from './actresses';

export type Language = 'vi' | 'en';

export const copy = {
  vi: {
    tiers: ['PHỔ BIẾN', 'HIẾM', 'CỰC PHẨM', '★ RARE'],
    title: 'Tối nay hỏi gì',
    counterPrefix: 'Lượt truy cập',
    counterSuffix: 'lần',
    counterTitle: 'Tổng số lượt quay ước tính của mọi người',
    caseLabel: 'Mở hòm xem gì',
    soundOn: 'Âm thanh bật',
    soundOff: 'Âm thanh tắt',
    turnSoundOff: 'Tắt âm thanh',
    turnSoundOn: 'Bật âm thanh',
    github: 'Mở mã nguồn trên GitHub',
    starsPending: 'chưa tải',
    language: 'Switch to English',
    opening: 'ĐANG MỞ HÒM…',
    openAgain: 'MỞ LẠI',
    open: 'MỞ HÒM',
    newItem: 'VẬT PHẨM MỚI',
    find: 'XEM TRANG',
    continue: 'TIẾP TỤC',
    whatsInside: 'TRONG HÒM CÓ GÌ?',
    items: 'Câu hỏi trong hòm',
    mystery: '★ RARE',
    mysteryAlt: 'Vật phẩm rare',
    footer: 'Fan-made · SFX: Valve /',
    inspiredBy: 'Lấy cảm hứng từ',
    debutLabel: 'Câu hỏi số',
    poolLabel: 'Số câu hỏi',
  },
  en: {
    tiers: ['COMMON', 'RARE', 'EPIC', '★ LEGENDARY'],
    title: 'What to ask tonight',
    counterPrefix: 'The internet has rolled',
    counterSuffix: 'times',
    counterTitle: 'Estimated completed spins worldwide',
    caseLabel: 'Open a watch case',
    soundOn: 'Sound on',
    soundOff: 'Sound off',
    turnSoundOff: 'Mute sound',
    turnSoundOn: 'Enable sound',
    github: 'Open source on GitHub',
    starsPending: 'not loaded',
    language: 'Chuyển sang tiếng Việt',
    opening: 'OPENING CASE…',
    openAgain: 'OPEN AGAIN',
    open: 'OPEN CASE',
    newItem: 'NEW ITEM',
    find: 'VIEW PAGE',
    continue: 'CONTINUE',
    whatsInside: "WHAT'S IN THE CASE?",
    items: 'Questions in this case',
    mystery: '★ RARE',
    mysteryAlt: 'Rare item',
    footer: 'Fan-made · SFX: Valve /',
    inspiredBy: 'Inspired by',
    videosLabel: 'videos',
    debutLabel: 'Question number',
    poolLabel: 'Question count',
  },
} as const;

export function actressName(actress: Actress, _language: Language) {
  return actress.name;
}

export function actressSubtitle(actress: Actress, language: Language) {
  const t = copy[language];
  return `${actress.videos} ${t.videosLabel} · ${t.debutLabel} ${actress.debut}`;
}
