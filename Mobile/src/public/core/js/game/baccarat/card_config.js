/**** 
 * bộ bài có 52 lá bài (không tính lá joker)
 * bộ bài có 4 chất bài
 * chia ra sẽ có 13 lá có cùng tên nhưng khác chất
 * 
 * mảng trong js bắt đầu từ 0 nên ta không tính phần tử đầu (tức card 0)
 * thứ tự sắp xếp theo chất bài và tên lá bài tăng dần (A[♦] 2[♦] 3[♦]...K[♦])
 * 
 * mô tả ý nghĩa key và value
 * * card = số thứ tự của lá bài (dùng để xác định thông tin của lá bài) 
 * * name = tên lá bài
 * * point = giá trị điểm được cộng trong trò baccarat
 * * type = chất bài
 * * image = url hình ảnh lá bài
 * * * 1: ♦
 * * * 2: ♣
 * * * 3: ♥
 * * * 4: ♠
 * link hình ảnh lá bài lấy ở đây: https://tekeye.uk/playing_cards/svg-playing-cards
*/


const BACCARAT_CARD_CONFIG = [
    {
        card: 0,
        name: 0,
        point: 0,
        type: 0,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/png_96_dpi/red2.png"
    },
    {
        card: 1,
        name: "A",
        point: 1,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_ace.png"
    },
    {
        card: 2,
        name: "2",
        point: 2,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_2.png"
    },
    {
        card: 3,
        name: "3",
        point: 3,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_3.png"
    },
    {
        card: 4,
        name: "4",
        point: 4,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_4.png"
    },
    {
        card: 5,
        name: "5",
        point: 5,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_5.png"
    },
    {
        card: 6,
        name: "6",
        point: 6,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_6.png"
    },
    {
        card: 7,
        name: "7",
        point: 7,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_7.png"
    },
    {
        card: 8,
        name: "8",
        point: 8,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_8.png"
    },
    {
        card: 9,
        name: "9",
        point: 9,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_9.png"
    },
    {
        card: 10,
        name: "10",
        point: 0,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_10.png"
    },
    {
        card: 11,
        name: "J",
        point: 0,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_jack.png"
    },
    {
        card: 12,
        name: "Q",
        point: 0,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_queen.png"
    },
    {
        card: 13,
        name: "K",
        point: 0,
        type: 1,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/diamonds_king.png"
    },
    {
        card: 14,
        name: "A",
        point: 1,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_ace.png"
    },
    {
        card: 15,
        name: "2",
        point: 2,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_2.png"
    },
    {
        card: 16,
        name: "3",
        point: 3,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_3.png"
    },
    {
        card: 17,
        name: "4",
        point: 4,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_4.png"
    },
    {
        card: 18,
        name: "5",
        point: 5,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_5.png"
    },
    {
        card: 19,
        name: "6",
        point: 6,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_6.png"
    },
    {
        card: 20,
        name: "7",
        point: 7,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_7.png"
    },
    {
        card: 21,
        name: "8",
        point: 8,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_8.png"
    },
    {
        card: 22,
        name: "9",
        point: 9,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_9.png"
    },
    {
        card: 23,
        name: "10",
        point: 0,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_10.png"
    },
    {
        card: 24,
        name: "J",
        point: 0,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_jack.png"
    },
    {
        card: 25,
        name: "Q",
        point: 0,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_queen.png"
    },
    {
        card: 26,
        name: "K",
        point: 0,
        type: 2,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/clubs_king.png"
    },
    {
        card: 27,
        name: "A",
        point: 1,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_ace.png"
    },
    {
        card: 28,
        name: "2",
        point: 2,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_2.png"
    },
    {
        card: 29,
        name: "3",
        point: 3,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_3.png"
    },
    {
        card: 30,
        name: "4",
        point: 4,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_4.png"
    },
    {
        card: 31,
        name: "5",
        point: 5,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_5.png"
    },
    {
        card: 32,
        name: "6",
        point: 6,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_6.png"
    },
    {
        card: 33,
        name: "7",
        point: 7,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_7.png"
    },
    {
        card: 34,
        name: "8",
        point: 8,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_8.png"
    },
    {
        card: 35,
        name: "9",
        point: 9,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_9.png"
    },
    {
        card: 36,
        name: "10",
        point: 0,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_10.png"
    },
    {
        card: 37,
        name: "J",
        point: 0,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_jack.png"
    },
    {
        card: 38,
        name: "Q",
        point: 0,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_queen.png"
    },
    {
        card: 39,
        name: "K",
        point: 0,
        type: 3,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/hearts_king.png"
    },
    {
        card: 40,
        name: "A",
        point: 1,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/other/png_96_dpi/spades_ace_simple.png"
    },
    {
        card: 41,
        name: "2",
        point: 2,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_2.png"
    },
    {
        card: 42,
        name: "3",
        point: 3,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_3.png"
    },
    {
        card: 43,
        name: "4",
        point: 4,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_4.png"
    },
    {
        card: 44,
        name: "5",
        point: 5,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_5.png"
    },
    {
        card: 45,
        name: "6",
        point: 6,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_6.png"
    },
    {
        card: 46,
        name: "7",
        point: 7,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_7.png"
    },
    {
        card: 47,
        name: "8",
        point: 8,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_8.png"
    },
    {
        card: 48,
        name: "9",
        point: 9,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_9.png"
    },
    {
        card: 49,
        name: "10",
        point: 0,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_10.png"
    },
    {
        card: 50,
        name: "J",
        point: 0,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_jack.png"
    },
    {
        card: 51,
        name: "Q",
        point: 0,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_queen.png"
    },
    {
        card: 52,
        name: "K",
        point: 0,
        type: 4,
        image: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/png_96_dpi/spades_king.png"
    }
];