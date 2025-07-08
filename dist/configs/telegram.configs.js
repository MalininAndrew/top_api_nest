"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelegramConfig = void 0;
const getTelegramConfig = async (configService) => {
    const token = configService.get('TELEGRAM_TOKEN');
    if (!token) {
        throw new Error('TELEGRAM_TOKEN не задан');
    }
    return {
        token,
        chatId: configService.get('CHAT_ID') ?? ''
    };
};
exports.getTelegramConfig = getTelegramConfig;
//# sourceMappingURL=telegram.configs.js.map