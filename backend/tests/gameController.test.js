const { isCorrectClick } = require("../controllers/gameController")

// --- The Test Suite ---
describe('isCorrectClick', () => {

    // --- 1. Test Data for "Maria" ---
    // rectX: 1959, rectY: 724, rectWidth: 37, rectHeight: 87
    // X-Range: [1959, 1996]
    // Y-Range: [724, 811]
    const maria = { x: 1959, y: 724, w: 37, h: 87 };

    describe('Maria: Hit Tests (Should Return True)', () => {
        test('should return TRUE for a click in the center', () => {
            const clickX = 1977; // Center X
            const clickY = 767;  // Center Y
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(true);
        });

        test('should return TRUE for a click on the exact top-left corner', () => {
            const clickX = 1959; // Left edge
            const clickY = 724;  // Top edge
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(true);
        });

        test('should return TRUE for a click on the exact bottom-right corner', () => {
            const clickX = 1996; // Right edge (1959 + 37)
            const clickY = 811;  // Bottom edge (724 + 87)
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(true);
        });
    });

    describe('Maria: Miss Tests (Should Return False)', () => {
        test('should return FALSE for a click just left of the box', () => {
            const clickX = 1958; // 1 pixel left
            const clickY = 767;  // Center Y
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(false);
        });

        test('should return FALSE for a click just right of the box', () => {
            const clickX = 1997; // 1 pixel right
            const clickY = 767;  // Center Y
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(false);
        });

        test('should return FALSE for a click just above the box', () => {
            const clickX = 1977; // Center X
            const clickY = 723;  // 1 pixel above
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(false);
        });

        test('should return FALSE for a click just below the box', () => {
            const clickX = 1977; // Center X
            const clickY = 812;  // 1 pixel below
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(false);
        });

        test('should return FALSE for a click far away (e.g., 0,0)', () => {
            const clickX = 0;
            const clickY = 0;
            expect(isCorrectClick(clickX, clickY, maria.x, maria.y, maria.w, maria.h)).toBe(false);
        });
    });

    // --- 2. Sanity Check with "KFC" ---
    // rectX: 1294, rectY: 1119, rectWidth: 33, rectHeight: 39
    // X-Range: [1294, 1327]
    // Y-Range: [1119, 1158]
    const kfc = { x: 1294, y: 1119, w: 33, h: 39 };

    describe('KFC: Sanity Tests', () => {
        test('should return TRUE for a center click', () => {
            const clickX = 1310; // Center X
            const clickY = 1138; // Center Y
            expect(isCorrectClick(clickX, clickY, kfc.x, kfc.y, kfc.w, kfc.h)).toBe(true);
        });

        test('should return FALSE for a click far away', () => {
            const clickX = 2000;
            const clickY = 2000;
            expect(isCorrectClick(clickX, clickY, kfc.x, kfc.y, kfc.w, kfc.h)).toBe(false);
        });
    });

    // --- 3. Sanity Check with "Crabby" ---
    // rectX: 1290, rectY: 1586, rectWidth: 44, rectHeight: 32
    // X-Range: [1290, 1334]
    // Y-Range: [1586, 1618]
    const crabby = { x: 1290, y: 1586, w: 44, h: 32 };
    
    describe('Crabby: Sanity Tests', () => {
        test('should return TRUE for a center click', () => {
            const clickX = 1312; // Center X
            const clickY = 1602; // Center Y
            expect(isCorrectClick(clickX, clickY, crabby.x, crabby.y, crabby.w, crabby.h)).toBe(true);
        });

        test('should return FALSE for a click just above', () => {
            const clickX = 1312; // Center X
            const clickY = 1585; // 1 pixel above
            expect(isCorrectClick(clickX, clickY, crabby.x, crabby.y, crabby.w, crabby.h)).toBe(false);
        });
    });
});

