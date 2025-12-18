// ==================== DỮ LIỆU VÀ BIẾN TOÀN CỤC ====================

const recipes = [
    /* ===============================MÓN CHÍNH=============================== */
    {
        id: 1,
        title: "Chả Tôm Cuộn Rong Biển Bánh Tráng",
        description: "Món chả tôm cuộn rong biển bánh tráng giòn ngon, hấp dẫn và dễ làm tại nhà.",
        image: "https://img-global.cpcdn.com/recipes/98f7021e6848c54a/240x320cq80/photo.jpg",
        time: 120,
        difficulty: "Trung bình",
        category: "appetizers",
        ingredients: ["200g tôm lột sẵn", "Vài miếng bánh tráng mỏng", "Vài miếng rong biển loại cuộn kimbap", "Hành lá", "Gia vị: hạt nêm, tiêu"],
        steps: [
            "Tôm bóc vỏ bỏ chỉ. Để đông lạnh vài giờ. Lấy ra cho vào máy xay nhuyễn, trộn với đầu hành lá cắt nhỏ, tỏi băm (đã phi thơm càng tốt), 1 mcf hạt nêm (hoặc chỉ muối và đường), 1 ít tiêu xay, 1 mcf dầu ăn. Trộn đều. Đeo bao tay nhồi cho đến khi hỗn hợp kết dính, bốc lên rồi thẩy xuống thố làm vài lần để chả dai. Dính tay thì cho xíu nước hoặc dầu vào bao tay rồi trộn tiếp",
            "Đặt tấm rong biển lên dĩa, múc chả lên trải đều khắp mặt rong biển rồi lấy miếng bánh tráng hình vuông cùng kích cỡ phủ lên mặt chả. Gấp làm đôi (theo mặt rong biển). Dùng kéo cắt thành thanh dài hoặc vuông tuỳ ý.",
            "Bắc chảo dầu lên, dầu nóng cho chả vô chiên. Chả rất nhanh chín nên canh trở mặt liền tay nếu không rất dễ khét nhé. Chiên vàng đều 2 mặt rồi vớt ra để lên giấy thấm dầu",
            "Ăn không chấm tương ớt hoặc cuốn rau sống chấm nước mắm chua ngọt cũng ngon nhé"
        ],
        likes: 12,
        authorId: 1,
        createdAt: "2025-05-10"
    },
    
    {
        id: 2,
        title: "Súp Hải Sản",
        description: "Món súp hải sản thơm ngon, bổ dưỡng với hương vị đậm đà từ các loại hải sản tươi sống.",
        image: "https://cdn.tgdd.vn/Files/2020/02/07/1234859/cach-nau-sup-hai-san-thom-ngon-bo-duong-cho-ca-gia-dinh-202203151808152700.jpg",
        time: 45,
        difficulty: "Dễ",
        category: "appetizers",
        ingredients: ["2 trái bắp", "100g hành tím", "100g nấm", "100g mực", "200g tôm", "200g cá thác lác", "15 quả trứng cút", "2 muống canh bột bắp", "Gia vị: 2 muỗng hạt nêm, 1/2 muống đường, tiêu xay (tùy thích), dầu ăn"],
        steps: [
            "Rửa sạch tất cả các nguyên liệu với nước, để cho ráo nước.",
            "Mực ta sẽ cắt hạt lựu, tôm lột bỏ vỏ, sau đó cũng cắt hạt lựu như mực, nấm rơm và hành tím thì cắt thành những lát mỏng. Sau đó, lấy 1 hành tím đem băm nhuyễn.",
            "Cho vào tô tôm, mực cùng với 2 muỗng hạt nêm và một ít tiêu. Sau đó, trộn đều lên và ướp trong khoảng 15 phút.",
            "Đem bắp đi lột bỏ vỏ, sau đó, cắt lấy phần hạt. Lưu ý, các bạn hãy giữ lại phần cùi và bẻ nó làm đôi nhé. Còn bột bắp thì ta sẽ cho vào đó nửa chén nước và khuấy cho tan hoàn toàn.",
            "Bắc nồi nước lên bếp, sau đó cho trứng cút vào luộc tầm phút thì tắt bếp.",
            "Cho dầu ăn vào chảo, sau đó cho hành phi cắt lát mỏng vào, phi vàng thơm thì vớt ra. Phần dầu còn dư thì ta tiếp tục cho hành phi băm nhuyễn vào và cũng phi thơm lên. Sau đó, cho tôm, mực, nấm rơm vào đảo đều khoảng 4 phút.",
            "Bắc lên bếp 1,5 lít nước, cho bắp và cùi vào, đậy nắp lại rồi nấu cho sôi lên khoảng 5 phút. Sau đó, vớt cùi bắp ra, cho phần hỗn hợp vừa xào vô, khuấy đều lên, đợi cho phần nước này sôi thì nấu thêm tầm 5 phút nữa. thêm 2 muỗng hạt nêm cùng 1/2 muỗng đường vào, nêm nếm lại cho vừa ăn.",
            "Đập 2 quả trứng gà bỏ vào trong ray và cho chảy từ từ xuống súp, đồng thời, cho trứng cút lột vỏ vào luôn, khuấy đều",
            "Thưởng thức súp hải sản nóng cùng với hành phi và tiêu xay lên trên."
        ],
        likes: 33,
        authorId: 1,
        createdAt: "2024-09-16"
    },
    
    {
        id: 3,
        title: "Tôm Cuộn Khoai Tây",
        description: "Món tôm cuộn khoai tây giòn ngon, hấp dẫn và dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/2021/07/CookProduct/tomcuonkhoaitay-1200x676.jpg",
        time: 120,
        difficulty: "Trung bình",
        category: "appetizers",
        ingredients: ["200g tôm tươi", "300g khoai tây", "50g bột chiến giòn", "1/2 chén dầu ăn", "Gia vị: muối, tiêu"],
        steps: [
            "Sơ chế tôm, lột vỏ, cắt bớt phần đầu tôm và để lại đuôi tôm. Sau đó rửa sạch để ráo nước và ướp 1 ít tiêu trong 5 phút.",
            "Khoai tây gọt vỏ, rửa sạch và cắt thành từng que dài giống như hình dạng của tôm. Ngâm khoai tây trong nước muối loãng khoảng 10-30 phút để khoai không bị thâm đen.",
            "Đem khoai tây ra rửa lại với nước sạch và để ráo. Sau đó, lấy từng que khoai tây cuộn quanh con tôm sao cho phần đuôi tôm lòi ra ngoài.",
            "Chuẩn bị bột chiên giòn theo hướng dẫn trên bao bì. Nhúng từng cuộn tôm khoai tây vào bột chiên giòn sao cho bột phủ đều quanh cuộn tôm.",
            "Bắc chảo dầu lên bếp, đun nóng dầu rồi cho từng cuộn tôm khoai tây vào chiên ở lửa vừa đến khi vàng giòn đều các mặt. Vớt ra để lên giấy thấm dầu.",
            "Thưởng thức tôm cuộn khoai tây khi còn nóng với tương ớt hoặc sốt mayonnaise."
        ],
        likes: 25,
        authorId: 1,
        createdAt: "2025-08-20"
    },
    
    {
        id: 4,
        title: "Mực Chiên Giòn",
        description: "Món mực chiên giòn thơm ngon, dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/Files/2019/08/31/1193499/cach-lam-muc-chien-gion-chien-xu-gion-thom-ngon-gion-dai-202205241518584464.jpg",
        time: 50,
        difficulty: "Dễ",
        category: "appetizers",
        ingredients: ["300g mực ống", "250g bột chiên giòn", "Hành là", "Gia vị: muối, đường, hạt nêm, ớt bột"],
        steps: [
            "Sơ chế mực, rửa sạch, cắt thành từng miếng nhỏ. Sau đó, ướp mực với một ít muối và tiêu trong 10 phút.",
            "Chuẩn bị bột chiên giòn theo hướng dẫn trên bao bì. Nhúng từng miếng mực vào bột chiên giòn sao cho bột phủ đều quanh miếng mực.",
            "Bắc chảo dầu lên bếp, đun nóng dầu rồi cho từng miếng mực vào chiên ở lửa vừa đến khi vàng giòn đều các mặt. Vớt ra để lên giấy thấm dầu.",
            "Thưởng thức mực chiên giòn khi còn nóng với tương ớt hoặc sốt mayonnaise."
        ],
        likes: 25,
        authorId: 3,
        createdAt: "2024-08-24"
    },
    
    {
        id: 5,
        title: "Trứng Cuộn Kiểu Nhật",
        description: "Món trứng cuộn ngọt ngào, mềm mịn theo phong cách Nhật Bản, hoàn hảo cho bữa sáng.",
        image: "https://cdn.tgdd.vn/Files/2021/08/24/1377557/bi-quyet-lam-mon-com-cuon-trung-nhat-ban-omurice-thanh-cong-ngay-lan-dau-202201171407344977.jpg",
        time: 30,
        difficulty: "Dễ",
        category: "main-dishes",
        ingredients: ["2 quả trứng gà", "1 thìa cà phê đường", "1 thìa cà phê nước tương", "1 thìa cà phê Mirin", "Dầu ăn"],
        steps: [
            "Đánh tan trứng trong một tô nhỏ. Thêm đường, nước tương và Mirin vào, khuấy đều cho đến khi hòa quyện.",
            "Làm nóng chảo chống dính hình chữ nhật (hoặc chảo tròn bình thường) ở lửa vừa. Thoa một lớp dầu mỏng.",
            "Đổ một lớp mỏng hỗn hợp trứng vào chảo. Khi lớp trứng bên dưới đã chín nhưng bề mặt còn hơi ướt, cuộn trứng từ từ từ cuối chảo về phía trước.",
            "Lặp lại quá trình với lớp trứng tiếp theo cho đến khi hết hỗn hợp trứng.",
            "Để nguội một chút rồi cắt thành từng khoanh vừa ăn."
        ],
        likes: 42,
        authorId: 2,
        createdAt: "2025-01-15"
    },
    
    {
        id: 6,
        title: "Canh Mồng Tơi Mướp Nấu Tôm Thịt",
        description: "Món canh mồng tơi và mướp nấu với tôm thịt, thơm ngon và bổ dưỡng.",
        image: "https://afamilycdn.com/150157425591193600/2024/5/28/edit-20160517anktmoncanh208-3534c-17168839788091508298013.jpeg",
        time: 25,
        difficulty: "Dễ",
        category: "main-dishes",
        ingredients: ["1 bó rau mồng tơi", "1 trái mướp", "100g thịt xay", "100g tép", "Gia vị: muối, hạt nêm, bột ngọt"],
        steps: [
            "Tép rửa sạch, cho vào nồi nước cùng với thịt xay nấu sôi.",
            "Rau nhặt rửa sạch, cắt nhỏ mướp thành khúc vừa ăn.",
            "Đun nước sôi và cho rau, mướp vào nấu chín.",
            "Nêm muối, hạt nêm, cuối cùng cho thêm ít tiêu xay",
            "Để nguội một chút rồi thưởng thức."
        ],
        likes: 25,
        authorId: 2,
        createdAt: "2025-01-18"
    },
    
    {
        id: 7,
        title: "Gỏi Đu Đủ Tôm Thịt",
        description: "Món gỏi đu đủ và tôm thịt, giòn ngon và bổ dưỡng.",
        image: "https://img-global.cpcdn.com/recipes/cdf40f784ef2b484/600x852f0.5_0.5_1.0q80/g%E1%BB%8Fi-du-d%E1%BB%A7-tom-th%E1%BB%8Bt-recipe-main-photo.webp",
        time: 35,
        difficulty: "Trung bình",
        category: "main-dishes",
        ingredients: ["200g thịt luộc", "200g tôm tươi", "1/2 trái đu đủ (khoảng 500g)", "4 muỗng nước mắm", "4 muỗng đường", "4 muỗng nước cốt chanh", "4 tép tỏi băm", "3 trái ớt băm, 10g rau thơm và 30g lạc rang"],
        steps: [
            "Thịt luộc cắt lát, cho lên chảo đảo với 1 muỗng nước mắm và 1 muỗng đường cho thấm vị.",
            "Tôm luộc chín, bóc vỏ, để ráo.",
            "Đu đủ bào thành sợi, ngâm nước đá 10 phút cho giòn và vớt ra để ráo.",
            "Giã tỏi, ớt rồi pha nước mắm, đường, chanh thành nước trộn gỏi.",
            "Trộn đu đủ, thịt, tôm với nước mắm trộn gỏi, thêm rau răm, lạc rang, đảo đều và thưởng thức."
        ],
        likes: 33,
        authorId: 2,
        createdAt: "2025-05-28"
    },
    
    {
        id: 8,
        title: "Gà Kho Gừng",
        description: "Món gà kho gừng thơm ngon, đậm đà và bổ dưỡng.",
        image: "https://cdn.tgdd.vn/2021/03/CookProduct/0-1200x676-6.jpg",
        time: 36,
        difficulty: "Trung bình",
        category: "main-dishes",
        ingredients: ["500g thịt gà", "Gừng, tỏi và ớt", "Gia vị: nước mắm, muối, đường, tiêu, hạt nên, tương ớt, nước màu"],
        steps: [
            "Gà rửa sạch, chặt miếng vừa ăn. Gừng cạo vỏ, thái sợi. Tỏi đập dập, băm nhỏ.",
            "Ướp thịt với nước mắm, tiêu, tương ớt, nước màu, hạt nêm và tỏi trong khoảng 15 phút.",
            "Làm nóng chảo, cho ít dầu ăn rồi phi thơm tỏi. Cho thịt gà vào xào săn.",
            "Thêm nước xâm xấp mặt gà, đun sôi rồi hạ lửa nhỏ kho trong 20 phút.",
            "Khi nước gần cạn, thêm gừng và ớt, đảo đều. Rắc tiêu rồi tắt bếp."
        ],
        likes: 50,
        authorId: 3,
        createdAt: "2025-11-06"
    },
    
    {
        id: 9,
        title: "Phở Gà Truyền Thống",
        description: "Phở gà thơm ngon với nước dùng trong veo, thịt gà mềm và hương vị đậm đà.",
        image: "https://cdn.zsoft.solutions/poseidon-web/app/media/uploaded-files/200823-cach-lam-pho-ga-buffet-poseidon.jpg",
        time: 45,
        difficulty: "Trung bình",
        category: "main-dishes",
        ingredients: ["500g thịt gà", "200g bánh phở", "Hành tây, gừng, hành lá", "Gia vị: hồi, quế, thảo quả", "Nước mắm, muối, đường"],
        steps: [
            "Rửa sạch thịt gà, cho vào nồi cùng với nước lạnh, đun sôi rồi vớt bọt.",
            "Thêm hành tây, gừng nướng và các loại gia vị vào nồi, hầm nhỏ lửa trong 30 phút.",
            "Vớt thịt gà ra, để nguội rồi xé nhỏ.",
            "Luộc bánh phở theo hướng dẫn trên bao bì.",
            "Xếp bánh phở vào tô, thêm thịt gà, hành lá rồi chan nước dùng nóng lên trên."
        ],
        likes: 67,
        authorId: 3,
        createdAt: "2023-02-20"
    },
    
    {
        id: 10,
        title: "Pizza Tự Làm",
        description: "Pizza với đế bánh giòn tan, phô mai kéo sợi và topping tươi ngon theo sở thích.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        time: 20,
        difficulty: "Dễ",
        category: "main-dishes",
        ingredients: ["Bột bánh pizza", "Sốt cà chua", "Phô mai Mozzarella", "Topping tùy chọn: xúc xích, nấm, ớt chuông", "Dầu olive, gia vị"],
        steps: [
            "Làm nóng lò nướng ở 220°C.",
            "Cán bột thành hình tròn, đặt lên khay nướng có phết dầu olive.",
            "Phết sốt cà chua lên mặt bánh, rắc phô mai và các topping yêu thích.",
            "Nướng trong 12-15 phút cho đến khi vàng giòn.",
            "Lấy ra, cắt miếng và thưởng thức ngay khi còn nóng."
        ],
        likes: 53,
        authorId: 1,
        createdAt: "2023-03-10"
    },
    
    /* ===============================EAT CLEAN=============================== */
    {
        id: 11,
        title: "Salad Rau Củ Tươi",
        description: "Salad giòn ngon với các loại rau củ tươi, sốt chua ngọt hấp dẫn.",
        image: "https://ausimex.com.vn/wp-content/uploads/2024/04/cach-lam-salad-rau-tron-giam-can-01.jpg",
        time: 15,
        difficulty: "Dễ",
        category: "eat-clean",
        ingredients: ["Xà lách, cà chua bi, dưa leo", "Cà rốt, ớt chuông", "Sốt: dầu olive, chanh, mật ong", "Muối, tiêu, rau thơm"],
        steps: [
            "Rửa sạch và cắt nhỏ các loại rau củ.",
            "Pha sốt: trộn đều dầu olive, nước cốt chanh, mật ong, muối và tiêu.",
            "Trộn đều rau củ với sốt.",
            "Rắc thêm rau thơm và thưởng thức."
        ],
        likes: 38,
        authorId: 2,
        createdAt: "2023-04-05"
    },
    
    {
        id: 12,
        title: "Cơm Gạo Lứt",
        description: "Cơm gạo lứt thơm ngon, bổ dưỡng và tốt cho sức khỏe.",
        image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_29_638342154203476782_cach-nau-com-gao-lut.png",
        time: 45,
        difficulty: "Dễ",
        category: "eat-clean",
        ingredients: ["Gạo lứt (1 chén)", "Nước (1 chén)"],
        steps: [
            "Rửa sạch gạo lứt dưới nước lạnh để loại bỏ bụi bẩn và tạp chất.",
            "Cho gạo lứt và nước vào nồi, đun sôi rồi giảm lửa, ninh khoảng 45 phút cho đến khi gạo chín mềm.",
            "Múc cơm ra bát, dùng kèm rau củ hoặc các món ăn khác."
        ],
        likes: 30,
        authorId: 2,
        createdAt: "2023-04-04"
    },
    
    {
        id: 13,
        title: "Trứng Cuộn Cơm Cá Ngừ",
        description: "Trứng cuộn cơm cá ngừ thơm ngon, bổ dưỡng và dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/2021/03/CookRecipe/GalleryStep/lam-trung-cuon-ca-ngu-1.jpg",
        time: 45,
        difficulty: "Dễ",
        category: "eat-clean",
        ingredients: ["Cơm", "Cá ngừ đóng hộp", "Sốt mayonnaise", "Rong biển"],
        steps: [
            "Cho cá ngừ ra ngăn khô, ắt thật khô để tách lượng dầu và nước trong hộp ra, rồi cho cá vào tô 3 muỗng canh sốt mayonnaise, trộn đều.",
            "Đập trứng, nêm 1 ít muối rồi đánh đều. Sau đó, gấp đôi rong biển lại, sau đó dùng kéo cắt rong biển thành các sợi cỡ 1 lóng tay.",
            "Làm nóng chảo chống dính, cho 1 ít dầu ăn vào, đổ trứng vào chiên mỏng. Khi trứng chín, cho cơm lên trên mặt trứng, trải đều cơm ra.",
            "Trải đều hỗn hợp cá ngừ lên trên mặt cơm, rắc rong biển lên trên.",
            "Cuộn trứng lại thành hình trụ, cắt thành từng khoanh vừa ăn.",
            "Thưởng thức ngay."
        ],
        likes: 31,
        authorId: 2,
        createdAt: "2024-04-23"
    },
    
    {
        id: 14,
        title: "Cơm Cà Ri Ức Gà Nhật",
        description: "Cơm cà ri ức gà Nhật thơm ngon, bổ dưỡng và dễ làm tại nhà.",
        image: "https://img-global.cpcdn.com/recipes/28c6ed10b3721fbb/680x781cq80/c%C6%A1m-ca-ri-ga-nh%E1%BA%ADt-b%E1%BA%A3n-recipe-main-photo.jpg",
        time: 35,
        difficulty: "Dễ",
        category: "eat-clean",
        ingredients: ["Cơm gạo lứt", "Viên cà ri Nhật (2-4 viên)", "1/2 củ hành tây", "Ức gà, 1 củ cà rốt và 1/2 củ khoai tây"],
        steps: [
            "Cà rốt, hành tây, khoai tây cắt thành miếng vừa ăn. Ức gà rửa sạch, cắt miếng vừa ăn.",
            "Cho ức gà, hành tây, cà rốt, khoai tây vào nồi đảo đều tay.",
            "Cho 400ml nước vào nồi, vặn nhỏ lửa nấu trong khoảng 15-20 phút",
            "Thả viên cà ri vào nồi, khuấy nhẹ đến khi cà ri tan ra. Để lửa nhỏ, đun thêm khoảng 10 phút đến khi nước sốt hơi đặc và sánh.",
            "Sau khi cà ri sánh đặc thì múc ra khay, chan lên cơm khi thưởng thức."
        ],
        likes: 69,
        authorId: 1,
        createdAt: "2024-12-31"
    },
    
    /* ===============================THỨC UỐNG=============================== */
    {
        id: 15,
        title: "Sinh Tố Cải Bó Xôi",
        description: "Sinh tố bổ dưỡng từ táo và bó xôi, tốt cho sức khỏe và làm đẹp da.",
        image: "https://cdn.tgdd.vn/2020/09/CookProduct/1-1200x676-31.jpg",
        time: 10,
        difficulty: "Dễ",
        category: "beverages",
        ingredients: ["1 quả táo", "1 nắm bó xôi", "1/2 quả chanh", "1 thìa mật ong", "200ml nước lọc"],
        steps: [
            "Rửa sạch táo và bó xôi, cắt táo thành miếng nhỏ.",
            "Cho tất cả nguyên liệu vào máy xay sinh tố.",
            "Xay nhuyễn cho đến khi hỗn hợp mịn.",
            "Đổ ra ly và thưởng thức ngay."
        ],
        likes: 29,
        authorId: 3,
        createdAt: "2023-05-12"
    },
    
    {
        id: 16,
        title: "Matcha Sữa Dừa",
        description: "Matcha sữa dừa thơm ngon, dễ làm tại nhà.",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-_KWIaJ6PTCPWjxQPiSgr1gzqfFv699jDWVeqvZRAUzjACsXU",
        time: 15,
        difficulty: "Dễ",
        category: "beverages",
        ingredients: ["1/2 thìa bột matcha", "100ml nước cốt dừa", "100ml sữa tươi không đường", "Trân châu đen", "Sữa đặc", "Đường", "Đá viên"],
        steps: [
            "Cho 50ml sữa tươi không đường cùng 1/2 muỗng bột matcha vào chén. Tiếp theo, bạn trộn đều hỗn hợp.",
            "Thêm 100ml nước cốt dừa, 1-2 muỗng sữa đặc và 1-2 muỗng đường vào chén matcha. Khuấy đều cho đến khi hỗn hợp hòa quyện.",
            "Thêm đá viên vào ly, sau đó rót hỗn hợp matcha sữa dừa lên trên.",
            "Thêm trân châu đen vào ly và thưởng thức."
        ],
        likes: 52,
        authorId: 3,
        createdAt: "2024-10-10"
    },
    
    {
        id: 17,
        title: "Sinh Tố Dâu Tây",
        description: "Sinh tố dâu tây thơm ngon, dễ làm tại nhà.",
        image: "https://dodoto.vn/wp-content/uploads/2024/01/cach-lam-sinh-to-dau-dodoto.vn_.jpg",
        time: 25,
        difficulty: "Dễ",
        category: "beverages",
        ingredients: ["6-10 trái dâu tây", "2 muỗng sữa đặc", "150ml sữa tươi", "Đá bào"],
        steps: [
            "Đem dâu tây rửa sạch, bỏ cuống và cắt làm đôi.",
            "Cho tất cả nguyên liệu vào máy xay sinh tố.",
            "Xay nhuyễn cho đến khi hỗn hợp mịn.",
            "Đổ ra ly và thưởng thức ngay."
        ],
        likes: 24,
        authorId: 2,
        createdAt: "2024-12-10"
    },
    
    {
        id: 18,
        title: "Milo Dầm",
        description: "Milo dầm thơm ngon, dễ làm tại nhà.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97P0U7YgWpU6AXKTIRZQtU_CDG65-W7FgRg&s",
        time: 25,
        difficulty: "Dễ",
        category: "beverages",
        ingredients: ["140g bột milo", "580ml sữa tươi không đường", "70g socola chip", "100ml sốt socola", "Bánh snack socola", "Bánh quế", "Hạt điều", "Đá bào"],
        steps: [
            "Cho vào nồi 100g bột milo, 500ml sữa không đường, bắt lên bếp, nấu ở lửa nhỏ vừa cho tan bột milo. Khuấy đều tay để hỗn hợp không bị cháy khét dưới đáy nồi. Khi hỗn hợp sôi lăn tăn thì tắt bếp, để nguội.",
            "Sau đó cho vào trong một cái khây hoặc bọc để vào trong ngăn đá để đông trong 4 - 5 tiếng, rồi lấy ra giã mịn.",
            "Cho đá bào vào ly, múc milo đã giã mịn lên trên.",
            "Rưới sốt socola lên trên, thêm socola chip, bánh snack socola, bánh quế và hạt điều tùy thích.",
            "Thưởng thức ngay."
        ],
        likes: 42,
        authorId: 2,
        createdAt: "2025-11-19"
    },
    
    /* ===============================MÓN TRÁNG MIỆNG=============================== */
    {
        id: 19,
        title: "Bánh Flan Caramel",
        description: "Bánh flan mềm mịn với lớp caramen ngọt đắng hấp dẫn.",
        image: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/cach-lam-caramen-thumbnail.jpg",
        time: 60,
        difficulty: "Trung bình",
        category: "desserts",
        ingredients: ["4 quả trứng gà", "200ml sữa tươi", "100g đường", "1 ống vani", "Nước cốt chanh"],
        steps: [
            "Làm caramen: đun nóng 50g đường với 1 thìa nước cho đến khi chuyển màu nâu cánh gián.",
            "Đổ caramen vào khuôn bánh.",
            "Đánh tan trứng với đường còn lại, thêm sữa và vani vào khuấy đều.",
            "Lọc hỗn hợp qua rây cho mịn.",
            "Đổ hỗn hợp vào khuôn đã có caramen.",
            "Hấp cách thủy trong 30-40 phút.",
            "Để nguội và cho vào tủ lạnh ít nhất 2 giờ trước khi dùng."
        ],
        likes: 71,
        authorId: 1,
        createdAt: "2023-06-18"
    },
    
    {
        id: 20,
        title: "Chè Vải Hạt Sen",
        description: "Chè vải hạt sen thanh mát, giải nhiệt mùa hè.",
        image: "https://cdn.tgdd.vn/Files/2017/07/04/999563/cach-nau-che-vai-hat-sen-ngon-202207121412146552.jpg",
        time: 50,
        difficulty: "Dễ",
        category: "desserts",
        ingredients: ["200g hạt sen", "300g vải thiều", "50g đường cát trắng"],
        steps: [
            "Hạt sen rửa sạch, tách bỏ tim sen. Vải thiều lột vỏ, tách bỏ hạt.",
            "Nấu hạt sen với nước đến khi mềm, thêm đường vào khuấy đều.",
            "Khi hạt sen chín, cho vải thiều vào nấu thêm 5 phút.",
            "Tắt bếp, để nguội và thưởng thức."
        ],
        likes: 71,
        authorId: 3,
        createdAt: "2024-02-13"
    },
    
    {
        id: 21,
        title: "Bánh Bông Lan",
        description: "Bánh bông lan mềm mịn, thơm ngon với lớp đậu xanh và nước cốt dừa béo ngậy.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGLXa66b2_UbP7aTBnzSzDbsS61jFS7xEVQ&s",
        time: 130,
        difficulty: "Dễ",
        category: "desserts",
        ingredients: ["5 quả trứng gà (55g/quả)", "85g bột mì thường", "50ml dầu", "50ml sữa tươi không đường", "85g đường", "1/2 muỗng nước cốt chanh", "1/2 muỗng vanilla"],
        steps: [
            "Trứng tách lòng đỏ và lòng trắng, để riêng",
            "Lòng đỏ + 15 gr đường + vanilla cho vào âu dùng phới lồng khuấy tan mịn, sau đó cho sữa và dầu vào khuấy chung. Cuối cùng rây bột mì vào khuấy mịn. Lòng trắng + nước cốt chanh cho vào âu, dùng máy đánh 40 giây, sau đó cho từ từ đường vào tăng tốc độ đánh 3-4 phút để lòng trắng bông mịn, nhấc máy thấy lòng trắng có chóp là được.",
            "Cho 1/2 lòng trắng vào âu lòng đỏ dùng phới trộn nhẹ theo 1 chiều, khi trộn đều thì đổ âu lòng đỏ này vào âu lòng trắng còn lại tiếp tục trộn để tất cả hòa trộn với nhau.",
            "Đổ hỗn hợp vào khuôn đã lót giấy chống dính, gõ nhẹ khuôn cho bột đều và không có bọt khí. Nướng ở 160 độ C trong 40-45 phút (lò đã làm nóng trước).",
            "Lấy bánh ra khỏi lò, để nguội 10 phút rồi lấy bánh ra khỏi khuôn, để nguội hoàn toàn trên rack.",
            "Thưởng thức bánh cùng trà hoặc cà phê."
        ],
        likes: 41,
        authorId: 3,
        createdAt: "2024-01-11"
    },
    
    {
        id: 22,
        title: "Kem Dưa Hấu Sữa Chua",
        description: "Kem dưa hấu sữa chua mát lạnh, thơm ngon và dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/Files/2021/08/09/1374104/cach-lam-kem-dua-hau-sua-chua-thom-ngon-mat-lanh-202108092025031214.jpg",
        time: 50,
        difficulty: "Dễ",
        category: "desserts",
        ingredients: ["2 miếng dưa hấu", "1 hộp sữa chua", "1/2 quả chanh", "1 ít lá bạc hà", "1 muỗng mật ong", "Khuôn làm kem"],
        steps: [
            "Gọt vỏ rồi cắt thành từng miếng nhỏ và loại bỏ phần hạt bên trong.",
            "Cho dưa hấu vào máy xay sinh tố, thêm sữa chua, nước cốt chanh và mật ong vào xay nhuyễn.",
            "Đổ hỗn hợp vào khuôn làm kem, cắm que kem vào giữa và để vào ngăn đá tủ lạnh ít nhất 4 giờ.",
            "Lấy kem ra khỏi khuôn, trang trí với lá bạc hà và thưởng thức."
        ],
        likes: 71,
        authorId: 3,
        createdAt: "2025-03-10"
    },

    /* ===============================MÓN CHAY=============================== */
    {
        id: 23,
        title: "Ớt Chuông Xào Chay",
        description: "Ớt chuông xào chay giòn ngon, bổ dưỡng và dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/2021/10/CookDish/cach-lam-muc-xao-ot-chuong-don-gian-gion-ngon-cho-ca-gia-dinh-avt-1200x676.jpg",
        time: 50,
        difficulty: "Dễ",
        category: "vegetarian",
        ingredients: ["3 trái ớt chuông", "6 nấm mỡ (100g)", "2 tép tỏi", "2 muỗng dầu ăn", "Gia vị: đường, muối, tiêu, hạt nêm"],
        steps: [
            "Ớt chuông mua về các bạn mang rửa sạch, sau đó dùng dao chẻ đôi, bỏ hạt rồi tiếp tục cắt ớt thành các miếng vừa ăn.",
            "Nấm mỡ bạn đem rửa với nước cho sạch, để ráo. Dùng dao cắt nấm thành các lát dày khoảng 1/2 lóng tay nhỏ.",
            "Tỏi băm nhỏ, ớt chuông cắt lát mỏng, nấm mỡ cắt lát mỏng.",
            "Đun nóng chảo, cho dầu vào xào tỏi thơm, sau đó cho ớt chuông và nấm mỡ vào xào đều tay đến khi ớt chín mềm.",
            "Cho gia vị vào xào đều tay, tắt bếp và thưởng thức."
        ],
        likes: 31,
        authorId: 2,
        createdAt: "2025-03-17"
    },

    {
        id: 24,
        title: "Canh Rau Bí Luộc",
        description: "Canh rau bí luộc thanh mát, dễ làm và rất bổ dưỡng.",
        image: "https://cdnv2.tgdd.vn/mwg-static/common/Common/H%C3%ACnh%20m%C3%B3n%20an%20t11%20%281200%20x%20676%20px%29%20%2886%29.jpg",
        time: 30,
        difficulty: "Dễ",
        category: "vegetarian",
        ingredients: ["1 bó rau bí", "Gia vị: muối, bột ngọt, hạt nêm"],
        steps: [
            "Nhặt rau bí bằng cách tước bỏ lớp xơ mỏng bên ngoài của cọng và cuống lá để khi ăn rau không bị dai. Đây là mẹo luộc rau xanh ngon mà không bị xơ.",
            "Sau đó, bạn ngắt rau thành những đoạn vừa ăn, vò nhẹ phần lá để rau mềm hơn rồi rửa thật sạch với nước và để cho ráo.",
            "Đun một nồi nước lên bếp và đun sôi bùng lên trên lửa lớn. Để rau luộc được xanh và đậm vị hơn, bạn cho vào nồi nước sôi khoảng nửa muỗng muối.",
            "Khi nước đã sôi thật già, bạn cho toàn bộ phần rau bí đã chuẩn bị vào nồi. Dùng đũa nhấn cho rau ngập hoàn toàn trong nước và tiếp tục duy trì lửa lớn, không đậy nắp vung để rau giữ được màu xanh đẹp mắt.",
            "Luộc rau trong khoảng 5 phút cho đến khi rau chín tới, thân rau mềm nhưng vẫn giữ được độ giòn là được.",
            "Khi rau đã chín, bạn tắt bếp và vớt rau ra đĩa. Phần nước luộc bạn nêm thêm một chút mì chính (bột ngọt) để làm canh."
        ],
        likes: 12,
        authorId: 1,
        createdAt: "2024-07-18"
    },

    {
        id: 25,
        title: "Cơm Dừa Kho Chay",
        description: "Cơm dừa kho chay thơm ngon, bổ dưỡng và dễ làm tại nhà.",
        image: "https://cdn.tgdd.vn/2021/02/CookProduct/THUMB-1200x676-15.jpg",
        time: 25,
        difficulty: "Dễ",
        category: "vegetarian",
        ingredients: ["200g cơm dừa", "3 củ hành tím", "1 trái ớt", "1 ít dầu ăn", "2 muỗng nước mắm, 1 muỗng hạt nêm", "1 ít tương ớt", "i ít tiêu xay và đường"],
        steps: [
            "200gr cơm dừa tươi bạn mang thái sợi dày 1/2 lóng tay. Hành tím lột vỏ và ớt bạn thái lát mỏng.",
            "Cho 1 muỗng canh dầu ăn vào chảo, khi dầu nóng cho 1 muỗng canh đường và thắng đường đến khi nước màu chuyển màu cánh gián là hoàn thành.",
            "Sau đó, bạn cho 1 ít hành tím, 1 ít ớt, 2 muỗng nước mắm, 1 muỗng đường, 1 muỗng hạt nêm chay, 1 ít tiêu xay, 1 ít tương ớt, đảo đều đến khi các nguyên liệu thấm đều nhau.",
            "Tiếp đến, cho cơm dừa vào kho dưới lửa nhỏ, đảo đều khoảng 3 - 5 phút là có thể tắt bếp.",
            "Cho cơm dừa kho chay ra đĩa và thưởng thức ngay khi còn nóng."
        ],
        likes: 39,
        authorId: 2,
        createdAt: "2024-02-14"
    }
];

const categories = {
    'appetizers': { name: 'Món Khai Vị', icon: 'fa-egg', count: 25 },
    'main-dishes': { name: 'Món Chính', icon: 'fa-drumstick-bite', count: 48 },
    'desserts': { name: 'Tráng Miệng', icon: 'fa-ice-cream', count: 32 },
    'vegetarian': { name: 'Món Chay', icon: 'fa-leaf', count: 18 },
    'beverages': { name: 'Thức Uống', icon: 'fa-blender', count: 15 },
    'eat-clean': { name: 'Eat Clean', icon: 'fa-heart', count: 22 }
};

// Biến toàn cục
let currentFilter = 'all';
let currentUser = null;
let users = JSON.parse(localStorage.getItem('cookverse_users')) || [];
let userRecipes = JSON.parse(localStorage.getItem('cookverse_user_recipes')) || [];
let savedRecipes = JSON.parse(localStorage.getItem('cookverse_saved_recipes')) || [];
let likedRecipes = JSON.parse(localStorage.getItem('cookverse_liked_recipes')) || [];

// ==================== KHỞI TẠO DỮ LIỆU MẪU ====================

function initializeSampleData() {
    if (users.length === 0) {
        users = [
            {
                id: 1,
                name: "Nguyễn Thị Mai",
                email: "mai@example.com",
                password: hashPassword("Mai@123"),
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Đầu bếp gia đình với 10 năm kinh nghiệm. Yêu thích ẩm thực Việt Nam và các món ăn healthy.",
                joinDate: "2022-01-15",
                recipesCount: 2,
                likesCount: 42,
                savedRecipesCount: 3
            },
            {
                id: 2,
                name: "Trần Văn Nam",
                email: "nam@example.com",
                password: hashPassword("Nam@456"),
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Food blogger chuyên về ẩm thực đường phố. Luôn tìm kiếm những hương vị mới lạ.",
                joinDate: "2021-03-20",
                recipesCount: 2,
                likesCount: 156,
                savedRecipesCount: 8
            },
            {
                id: 3,
                name: "Lê Thị Hương",
                email: "huong@example.com",
                password: hashPassword("Huong@789"),
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Chuyên gia làm bánh và đồ ngọt. Đam mê tạo ra những chiếc bánh đẹp mắt và ngon miệng.",
                joinDate: "2023-01-10",
                recipesCount: 2,
                likesCount: 28,
                savedRecipesCount: 5
            }
        ];
        localStorage.setItem('cookverse_users', JSON.stringify(users));
    }
}

// ==================== HỆ THỐNG XÁC THỰC ====================

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
}

function validatePassword(password) {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const errors = [];
    if (password.length < minLength) errors.push(`Mật khẩu phải có ít nhất ${minLength} ký tự`);
    if (!hasUpperCase) errors.push('Mật khẩu phải có ít nhất 1 chữ hoa');
    if (!hasLowerCase) errors.push('Mật khẩu phải có ít nhất 1 chữ thường');
    if (!hasNumbers) errors.push('Mật khẩu phải có ít nhất 1 số');
    if (!hasSpecialChar) errors.push('Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function showPasswordValidation(fieldId, password) {
    document.querySelectorAll(`#${fieldId} ~ .validation-message`).forEach(msg => msg.remove());
    
    const validation = validatePassword(password);
    const input = document.getElementById(fieldId);
    const container = input.parentNode;
    
    if (password.length > 0) {
        const validationMessage = document.createElement('div');
        validationMessage.className = 'validation-message';
        
        if (validation.isValid) {
            validationMessage.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i> Mật khẩu mạnh';
            validationMessage.style.color = 'green';
            input.style.borderColor = 'green';
        } else {
            validationMessage.innerHTML = '<i class="fas fa-exclamation-circle" style="color: orange;"></i> Mật khẩu cần cải thiện';
            validationMessage.style.color = 'orange';
            input.style.borderColor = 'orange';
            validationMessage.title = validation.errors.join('\n');
        }
        
        container.appendChild(validationMessage);
    } else {
        input.style.borderColor = '#ddd';
    }
}

function setupPasswordToggle() {
    const passwordFields = [
        'loginPassword',
        'registerPassword', 
        'registerConfirmPassword'
    ];
    
    passwordFields.forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (!input) return;
        
        const container = document.createElement('div');
        container.className = 'password-input-container';
        container.style.position = 'relative';
        
        input.parentNode.insertBefore(container, input);
        container.appendChild(input);
        
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--gray);
            cursor: pointer;
            padding: 5px;
        `;
        
        toggleBtn.addEventListener('click', function() {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
        
        container.appendChild(toggleBtn);
    });
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('cookverse_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    } else {
        updateUIForGuest();
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('loginForm').reset();
}

function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
    document.getElementById('registerForm').reset();
    document.querySelectorAll('.validation-message').forEach(msg => msg.remove());
}

function loginUser(email, password) {
    const hashedPassword = hashPassword(password);
    const user = users.find(u => u.email === email && u.password === hashedPassword);
    
    if (user) {
        currentUser = { ...user };
        delete currentUser.password;
        localStorage.setItem('cookverse_current_user', JSON.stringify(currentUser));
        updateUIForLoggedInUser();
        closeAllModals();
        showNotification('Đăng nhập thành công!', 'success');
        return true;
    }
    return false;
}

function registerUser(name, email, password, confirmPassword) {
    if (!name || !email || !password || !confirmPassword) {
        showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Email không hợp lệ!', 'error');
        return false;
    }
    
    if (users.find(u => u.email === email)) {
        showNotification('Email đã được sử dụng!', 'error');
        return false;
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
        showNotification('Mật khẩu không đủ mạnh! ' + passwordValidation.errors[0], 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showNotification('Mật khẩu xác nhận không khớp!', 'error');
        return false;
    }
    
    const hashedPassword = hashPassword(password);
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
        joinDate: new Date().toISOString().split('T')[0],
        recipesCount: 0,
        likesCount: 0,
        savedRecipesCount: 0,
        bio: '',
        avatar: ''
    };
    
    users.push(newUser);
    localStorage.setItem('cookverse_users', JSON.stringify(users));
    
    currentUser = { ...newUser };
    delete currentUser.password;
    localStorage.setItem('cookverse_current_user', JSON.stringify(currentUser));
    
    updateUIForLoggedInUser();
    closeAllModals();
    showNotification('Đăng ký thành công! Chào mừng đến với CookVerse!', 'success');
    return true;
}

function updateUIForLoggedInUser() {
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userMenu').style.display = 'flex';
    updateUserAvatar();
    updateUserDropdownInfo();
}

function updateUIForGuest() {
    document.getElementById('authButtons').style.display = 'flex';
    document.getElementById('userMenu').style.display = 'none';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('cookverse_current_user');
    updateUIForGuest();
    showNotification('Đã đăng xuất!', 'info');
    showPage('home');
}

// ==================== QUẢN LÝ DROPDOWN USER MENU ====================

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

function closeUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.remove('show');
}

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('userDropdown');
    const avatarContainer = document.querySelector('.user-avatar-container');
    
    if (dropdown && avatarContainer && !avatarContainer.contains(e.target)) {
        closeUserDropdown();
    }
});

function updateUserAvatar() {
    const defaultAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
    
    if (currentUser && currentUser.avatar) {
        document.getElementById('userAvatarImg').src = currentUser.avatar;
        document.getElementById('dropdownAvatarImg').src = currentUser.avatar;
        if (document.getElementById('profileAvatarLarge')) {
            document.getElementById('profileAvatarLarge').src = currentUser.avatar;
        }
    } else {
        document.getElementById('userAvatarImg').src = defaultAvatar;
        document.getElementById('dropdownAvatarImg').src = defaultAvatar;
        if (document.getElementById('profileAvatarLarge')) {
            document.getElementById('profileAvatarLarge').src = defaultAvatar;
        }
    }
}

function updateUserDropdownInfo() {
    if (currentUser) {
        document.getElementById('dropdownUserName').textContent = currentUser.name;
        document.getElementById('dropdownUserEmail').textContent = currentUser.email;
    }
}

// ==================== TÍNH NĂNG YÊU THÍCH & LƯU CÔNG THỨC ====================

function likeRecipe(recipeId, event) {
    if (event) event.stopPropagation();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }

    const existingLike = likedRecipes.find(
        like => like.userId === currentUser.id && like.recipeId === recipeId
    );

    if (existingLike) {
        // Bỏ yêu thích
        likedRecipes = likedRecipes.filter(
            like => !(like.userId === currentUser.id && like.recipeId === recipeId)
        );
        
        // Giảm số lượt thích
        updateRecipeLikes(recipeId, -1);
        showNotification('Đã bỏ yêu thích công thức!', 'info');
    } else {
        // Thêm yêu thích
        likedRecipes.push({
            userId: currentUser.id,
            recipeId: recipeId,
            likedAt: new Date().toISOString()
        });
        
        // Tăng số lượt thích
        updateRecipeLikes(recipeId, 1);
        showNotification('Đã thêm vào yêu thích!', 'success');
    }

    localStorage.setItem('cookverse_liked_recipes', JSON.stringify(likedRecipes));
    updateRecipeLikeUI(recipeId);
}

function updateRecipeLikes(recipeId, change) {
    // Cập nhật trong recipes
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);
    if (recipeIndex !== -1) {
        recipes[recipeIndex].likes += change;
    }
    
    // Cập nhật trong userRecipes
    const userRecipeIndex = userRecipes.findIndex(r => r.id === recipeId);
    if (userRecipeIndex !== -1) {
        userRecipes[userRecipeIndex].likes += change;
    }
}

function updateRecipeLikeUI(recipeId) {
    const recipeCards = document.querySelectorAll(`.recipe-card[data-recipe-id="${recipeId}"]`);
    const allRecipes = [...recipes, ...userRecipes];
    const recipe = allRecipes.find(r => r.id === recipeId);
    const isLiked = currentUser && likedRecipes.some(
        like => like.userId === currentUser.id && like.recipeId === recipeId
    );

    recipeCards.forEach(card => {
        const likeBtn = card.querySelector('.like-btn');
        const likeCount = card.querySelector('.like-count');
        
        if (likeBtn) {
            likeBtn.innerHTML = isLiked ? 
                '<i class="fas fa-heart" style="color: #ff6b6b;"></i>' : 
                '<i class="far fa-heart"></i>';
            
            // Thêm animation
            if (isLiked) {
                likeBtn.classList.add('liked');
                setTimeout(() => likeBtn.classList.remove('liked'), 600);
            }
        }
        
        if (likeCount && recipe) {
            likeCount.textContent = recipe.likes;
        }
    });
}

function isRecipeLiked(recipeId) {
    return currentUser && likedRecipes.some(
        like => like.userId === currentUser.id && like.recipeId === recipeId
    );
}

function saveRecipe(recipeId, event) {
    if (event) event.stopPropagation();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }

    const existingSave = savedRecipes.find(
        save => save.userId === currentUser.id && save.recipeId === recipeId
    );

    if (!existingSave) {
        savedRecipes.push({
            userId: currentUser.id,
            recipeId: recipeId,
            savedAt: new Date().toISOString()
        });
        localStorage.setItem('cookverse_saved_recipes', JSON.stringify(savedRecipes));
        
        updateUserSavedCount();
        showNotification('Đã lưu công thức!', 'success');
        
        // Cập nhật UI
        updateRecipeSaveUI(recipeId, true);
    }
}

function removeSavedRecipe(recipeId, event) {
    if (event) event.stopPropagation();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }

    const saveIndex = savedRecipes.findIndex(
        save => save.userId === currentUser.id && save.recipeId === recipeId
    );

    if (saveIndex !== -1) {
        savedRecipes.splice(saveIndex, 1);
        localStorage.setItem('cookverse_saved_recipes', JSON.stringify(savedRecipes));
        
        updateUserSavedCount();
        showNotification('Đã xóa khỏi danh sách lưu!', 'info');
        
        // Cập nhật UI
        updateRecipeSaveUI(recipeId, false);
        
        // Nếu đang ở trang công thức đã lưu, reload
        if (document.getElementById('saved-recipes').classList.contains('active') ||
            (document.getElementById('saved-recipes-tab') && document.getElementById('saved-recipes-tab').classList.contains('active'))) {
            loadSavedRecipes();
        }
    }
}

function updateUserSavedCount() {
    if (!currentUser) return;
    
    const userSavedCount = savedRecipes.filter(sr => sr.userId === currentUser.id).length;
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        users[userIndex].savedRecipesCount = userSavedCount;
        localStorage.setItem('cookverse_users', JSON.stringify(users));
        currentUser.savedRecipesCount = userSavedCount;
        localStorage.setItem('cookverse_current_user', JSON.stringify(currentUser));
    }
}

function updateRecipeSaveUI(recipeId, isSaved) {
    const recipeCards = document.querySelectorAll(`.recipe-card[data-recipe-id="${recipeId}"]`);
    
    recipeCards.forEach(card => {
        const saveBtn = card.querySelector('.save-btn');
        if (saveBtn) {
            saveBtn.className = `action-btn save-btn ${isSaved ? 'saved' : ''}`;
            saveBtn.innerHTML = isSaved ? 
                '<i class="fas fa-bookmark"></i>' : 
                '<i class="far fa-bookmark"></i>';
            saveBtn.title = isSaved ? 'Bỏ lưu' : 'Lưu công thức';
            saveBtn.onclick = isSaved ? 
                (event) => removeSavedRecipe(recipeId, event) : 
                (event) => saveRecipe(recipeId, event);
        }
    });
}

// ==================== TẠO THẺ CÔNG THỨC ====================

function createRecipeCard(recipe) {
    const author = users.find(u => u.id === recipe.authorId) || { name: 'Ẩn danh' };
    const isCurrentUser = currentUser && currentUser.id === recipe.authorId;
    const isSaved = currentUser && savedRecipes.some(
        save => save.userId === currentUser.id && save.recipeId === recipe.id
    );
    const isLiked = isRecipeLiked(recipe.id);

    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}" onclick="showRecipeDetail(${recipe.id})">
            <div class="recipe-img" style="background-image: url('${recipe.image}')"></div>
            <div class="recipe-content">
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time} phút</span>
                    <span><i class="fas fa-fire"></i> ${recipe.difficulty}</span>
                </div>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-desc">${recipe.description}</p>
                <div class="recipe-author">
                    <small>Đăng bởi: ${author.name} ${isCurrentUser ? '(Bạn)' : ''}</small>
                </div>
                <div class="recipe-actions">
                    <span class="like-section">
                        <button class="like-btn" onclick="likeRecipe(${recipe.id}, event)">
                            ${isLiked ? 
                                '<i class="fas fa-heart" style="color: #ff6b6b;"></i>' : 
                                '<i class="far fa-heart"></i>'
                            }
                        </button>
                        <span class="like-count">${recipe.likes}</span>
                    </span>
                    <div class="recipe-action-buttons">
                        ${currentUser ? `
                            <button class="action-btn save-btn ${isSaved ? 'saved' : ''}" 
                                    onclick="${isSaved ? `removeSavedRecipe(${recipe.id}, event)` : `saveRecipe(${recipe.id}, event)`}" 
                                    title="${isSaved ? 'Bỏ lưu' : 'Lưu công thức'}">
                                <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        ` : ''}
                        <button class="action-btn share-btn" onclick="shareRecipe(${recipe.id}, event)" title="Chia sẻ">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== QUẢN LÝ MODAL ====================

function setupModals() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (!email || !password) {
            showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
            return;
        }
        
        if (!loginUser(email, password)) {
            showNotification('Email hoặc mật khẩu không đúng!', 'error');
        }
    });
    
    // Register form
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        registerUser(name, email, password, confirmPassword);
    });
    
    // Real-time password validation
    document.getElementById('registerPassword').addEventListener('input', function(e) {
        showPasswordValidation('registerPassword', e.target.value);
    });
    
    // Confirm password validation
    document.getElementById('registerConfirmPassword').addEventListener('input', function(e) {
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = e.target.value;
        const input = document.getElementById('registerConfirmPassword');
        
        document.querySelectorAll('#registerConfirmPassword ~ .validation-message').forEach(msg => msg.remove());
        
        if (confirmPassword.length > 0) {
            const validationMessage = document.createElement('div');
            validationMessage.className = 'validation-message';
            
            if (password === confirmPassword) {
                validationMessage.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i> Mật khẩu khớp';
                validationMessage.style.color = 'green';
                input.style.borderColor = 'green';
            } else {
                validationMessage.innerHTML = '<i class="fas fa-times-circle" style="color: red;"></i> Mật khẩu không khớp';
                validationMessage.style.color = 'red';
                input.style.borderColor = 'red';
            }
            
            input.parentNode.appendChild(validationMessage);
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    // Recipe form
    document.getElementById('recipeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!currentUser) {
            showNotification('Vui lòng đăng nhập để đăng công thức!', 'error');
            showLoginModal();
            return;
        }
        
        const newRecipe = {
            id: Date.now(),
            title: document.getElementById('recipeName').value,
            description: document.getElementById('recipeDesc').value,
            image: document.getElementById('recipeImage').value || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            time: parseInt(document.getElementById('recipeTime').value),
            difficulty: document.getElementById('recipeDifficulty').value,
            category: document.getElementById('recipeCategory').value,
            ingredients: Array.from(document.querySelectorAll('#ingredientList input')).map(input => input.value),
            steps: document.getElementById('recipeSteps').value.split('\n').filter(step => step.trim()),
            likes: 0,
            authorId: currentUser.id,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        userRecipes.push(newRecipe);
        localStorage.setItem('cookverse_user_recipes', JSON.stringify(userRecipes));
        
        // Update user's recipe count
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].recipesCount++;
            localStorage.setItem('cookverse_users', JSON.stringify(users));
            currentUser.recipesCount++;
            localStorage.setItem('cookverse_current_user', JSON.stringify(currentUser));
        }
        
        document.getElementById('addRecipeModal').style.display = 'none';
        this.reset();
        
        // Reset ingredients to one field
        document.getElementById('ingredientList').innerHTML = `
            <div class="ingredient-item">
                <input type="text" placeholder="Nguyên liệu và số lượng" required>
                <button type="button" class="remove-ingredient">-</button>
            </div>
        `;
        
        showNotification('Công thức đã được đăng thành công!', 'success');
        
        // Reload recipes to show the new one
        loadHomeRecipes();
        loadAllRecipes();
    });
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Add ingredient fields
    document.getElementById('addIngredient').addEventListener('click', function() {
        const ingredientList = document.getElementById('ingredientList');
        const ingredientItem = document.createElement('div');
        ingredientItem.className = 'ingredient-item';
        ingredientItem.innerHTML = `
            <input type="text" placeholder="Nguyên liệu và số lượng" required>
            <button type="button" class="remove-ingredient">-</button>
        `;
        ingredientList.appendChild(ingredientItem);
        
        ingredientItem.querySelector('.remove-ingredient').addEventListener('click', function() {
            if (document.querySelectorAll('.ingredient-item').length > 1) {
                ingredientItem.remove();
            }
        });
    });
    
    // Setup password toggle
    setupPasswordToggle();
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function showAddRecipeModal() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    document.getElementById('addRecipeModal').style.display = 'flex';
}

// ==================== QUẢN LÝ TRANG & HIỂN THỊ ====================

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[onclick*="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function filterByCategory(categoryId) {
    currentFilter = categoryId;
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    
    const activeFilter = document.querySelector(`.category-filter[onclick*="${categoryId}"]`);
    if (activeFilter) {
        activeFilter.classList.add('active');
    }
    
    showPage('recipes');
    const allRecipesContainer = document.getElementById('allRecipes');
    allRecipesContainer.innerHTML = '';
    
    let filteredRecipes = [...recipes, ...userRecipes];
    
    if (categoryId !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === categoryId);
    }
    
    if (filteredRecipes.length === 0) {
        allRecipesContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Không tìm thấy công thức trong danh mục này.</p>';
    } else {
        filteredRecipes.forEach(recipe => {
            allRecipesContainer.innerHTML += createRecipeCard(recipe);
        });
    }
}

function loadHomeRecipes() {
    const homeRecipesContainer = document.getElementById('homeRecipes');
    homeRecipesContainer.innerHTML = '';
    [...recipes, ...userRecipes].slice(0, 3).forEach(recipe => {
        homeRecipesContainer.innerHTML += createRecipeCard(recipe);
    });
}

function loadAllRecipes() {
    const allRecipesContainer = document.getElementById('allRecipes');
    allRecipesContainer.innerHTML = '';
    [...recipes, ...userRecipes].forEach(recipe => {
        allRecipesContainer.innerHTML += createRecipeCard(recipe);
    });
}

function loadCommunityUsers() {
    const communityUsersContainer = document.getElementById('communityUsers');
    communityUsersContainer.innerHTML = '';
    
    users.forEach(user => {
        communityUsersContainer.innerHTML += `
            <div class="user-card">
                <div class="user-avatar">
                    ${user.avatar ? 
                        `<img src="${user.avatar}" alt="${user.name}">` : 
                        `<i class="fas fa-user"></i>`
                    }
                </div>
                <h3>${user.name}</h3>
                <p class="user-email">${user.email}</p>
                <p class="join-date">Tham gia: ${user.joinDate}</p>
                
                <div class="user-stats">
                    <div class="user-stat">
                        <span class="number">${user.recipesCount}</span>
                        <span class="label">Công thức</span>
                    </div>
                    <div class="user-stat">
                        <span class="number">${user.likesCount || 0}</span>
                        <span class="label">Lượt thích</span>
                    </div>
                    <div class="user-stat">
                        <span class="number">${user.savedRecipesCount || 0}</span>
                        <span class="label">Đã lưu</span>
                    </div>
                </div>
                
                ${user.bio ? `<p class="user-bio">"${user.bio}"</p>` : ''}
                
                <button class="btn btn-view-profile" onclick="viewUserProfile(${user.id})">
                    <i class="fas fa-eye"></i> Xem hồ sơ
                </button>
            </div>
        `;
    });
}

function showRecipeDetail(recipeId) {
    const allRecipes = [...recipes, ...userRecipes];
    const recipe = allRecipes.find(r => r.id === recipeId);
    const author = users.find(u => u.id === recipe.authorId) || { name: 'Ẩn danh' };
    const isSaved = currentUser && savedRecipes.some(
        save => save.userId === currentUser.id && save.recipeId === recipeId
    );
    const isLiked = isRecipeLiked(recipeId);

    const recipeDetailContainer = document.getElementById('recipeDetailContent');
    recipeDetailContainer.innerHTML = `
        <button class="btn" onclick="showPage('recipes')" style="margin-bottom: 2rem;">
            <i class="fas fa-arrow-left"></i> Quay lại
        </button>
        
        <div class="recipe-header">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-info">
                <h1>${recipe.title}</h1>
                <p>${recipe.description}</p>
                <p><strong>Đăng bởi:</strong> ${author.name}</p>
                
                <div class="recipe-meta-detail">
                    <div class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${recipe.time} phút</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-fire"></i>
                        <span>${recipe.difficulty}</span>
                    </div>
                    <div class="meta-item">
                        <button class="like-btn meta-like-btn" onclick="likeRecipe(${recipe.id})">
                            ${isLiked ? 
                                '<i class="fas fa-heart" style="color: #ff6b6b;"></i>' : 
                                '<i class="far fa-heart"></i>'
                            }
                        </button>
                        <span class="like-count">${recipe.likes} lượt thích</span>
                    </div>
                </div>
                
                <div class="recipe-actions-detail">
                    ${currentUser ? `
                        <button class="btn ${isSaved ? 'btn-saved' : 'btn-save'}" 
                                onclick="${isSaved ? `removeSavedRecipe(${recipe.id})` : `saveRecipe(${recipe.id})`}">
                            <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>
                            ${isSaved ? 'Đã lưu' : 'Lưu công thức'}
                        </button>
                        <button class="btn" onclick="shareRecipe(${recipe.id})">
                            <i class="fas fa-share"></i> Chia sẻ
                        </button>
                    ` : `
                        <button class="btn" onclick="showLoginModal()">
                            <i class="far fa-bookmark"></i> Lưu công thức
                        </button>
                        <button class="btn" onclick="showLoginModal()">
                            <i class="fas fa-share"></i> Chia sẻ
                        </button>
                    `}
                </div>
            </div>
        </div>
        
        <div class="ingredients-section">
            <h2>Nguyên Liệu</h2>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="instructions-section">
            <h2>Các Bước Thực Hiện</h2>
            <ol class="instructions-list">
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;
    
    showPage('recipe-detail');
}

// ==================== HỒ SƠ NGƯỜI DÙNG ====================

function showUserProfile() {
    closeUserDropdown();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileJoinDate').textContent = currentUser.joinDate;
    document.getElementById('profileBio').textContent = currentUser.bio || 'Chưa có giới thiệu';
    
    updateUserAvatar();
    
    document.getElementById('statRecipes').textContent = currentUser.recipesCount || 0;
    document.getElementById('statLikes').textContent = currentUser.likesCount || 0;
    document.getElementById('statSaved').textContent = currentUser.savedRecipesCount || 0;
    document.getElementById('statFollowing').textContent = '0';
    
    // Hiển thị công thức của người dùng
    const profileMyRecipes = document.getElementById('profileMyRecipes');
    if (profileMyRecipes) {
        profileMyRecipes.innerHTML = '';
        const userRecipesList = userRecipes.filter(recipe => recipe.authorId === currentUser.id);
        if (userRecipesList.length === 0) {
            profileMyRecipes.innerHTML = `
                <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                    <i class="fas fa-book" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                    <h3>Chưa có công thức nào</h3>
                    <p>Hãy bắt đầu chia sẻ công thức của bạn với cộng đồng!</p>
                </div>
            `;
        } else {
            userRecipesList.forEach(recipe => {
                profileMyRecipes.innerHTML += createRecipeCard(recipe);
            });
        }
    }
    
    // Hiển thị công thức đã lưu
    const profileSavedRecipes = document.getElementById('profileSavedRecipes');
    if (profileSavedRecipes) {
        profileSavedRecipes.innerHTML = '';
        const userSavedRecipeIds = savedRecipes
            .filter(sr => sr.userId === currentUser.id)
            .map(sr => sr.recipeId);
        
        const savedRecipesList = [...recipes, ...userRecipes].filter(recipe => 
            userSavedRecipeIds.includes(recipe.id)
        );
        
        if (savedRecipesList.length === 0) {
            profileSavedRecipes.innerHTML = `
                <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                    <i class="fas fa-heart" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                    <h3>Chưa có công thức nào được lưu</h3>
                    <p>Hãy lưu những công thức bạn yêu thích để xem lại sau!</p>
                </div>
            `;
        } else {
            savedRecipesList.forEach(recipe => {
                profileSavedRecipes.innerHTML += createRecipeCard(recipe);
            });
        }
    }
    
    showPage('user-profile');
    showProfileTab('my-recipes-tab');
}

function showMyRecipes() {
    closeUserDropdown();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const myRecipesGrid = document.getElementById('myRecipesGrid');
    myRecipesGrid.innerHTML = '';
    
    const userRecipesList = userRecipes.filter(recipe => recipe.authorId === currentUser.id);
    
    if (userRecipesList.length === 0) {
        myRecipesGrid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                <i class="fas fa-book" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3>Chưa có công thức nào</h3>
                <p>Hãy bắt đầu chia sẻ công thức của bạn với cộng đồng!</p>
                <button class="btn" onclick="showAddRecipeModal()" style="margin-top: 1rem;">
                    Đăng công thức đầu tiên
                </button>
            </div>
        `;
    } else {
        userRecipesList.forEach(recipe => {
            myRecipesGrid.innerHTML += createRecipeCard(recipe);
        });
    }
    
    showPage('my-recipes');
}

function showSavedRecipes() {
    closeUserDropdown();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const savedRecipesGrid = document.getElementById('savedRecipesGrid');
    savedRecipesGrid.innerHTML = '';
    
    const userSavedRecipeIds = savedRecipes
        .filter(sr => sr.userId === currentUser.id)
        .map(sr => sr.recipeId);
    
    const savedRecipesList = [...recipes, ...userRecipes].filter(recipe => 
        userSavedRecipeIds.includes(recipe.id)
    );
    
    if (savedRecipesList.length === 0) {
        savedRecipesGrid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                <i class="fas fa-heart" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3>Chưa có công thức nào được lưu</h3>
                <p>Hãy lưu những công thức bạn yêu thích để xem lại sau!</p>
            </div>
        `;
    } else {
        savedRecipesList.forEach(recipe => {
            savedRecipesGrid.innerHTML += createRecipeCard(recipe);
        });
    }
    
    showPage('saved-recipes');
}

function loadSavedRecipes() {
    showSavedRecipes();
}

function showProfileTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// ==================== TÌM KIẾM & NẤU ĂN THÔNG MINH ====================

function setupSearchListeners() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    document.getElementById('recipeSearchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchRecipes();
    });
    document.getElementById('smartCookInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') smartCook();
    });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (query) {
        searchRecipes(query);
        showPage('recipes');
    }
}

function searchRecipes(query = null) {
    const searchQuery = query || document.getElementById('recipeSearchInput').value.toLowerCase().trim();
    const allRecipesContainer = document.getElementById('allRecipes');
    
    if (!searchQuery) {
        filterByCategory(currentFilter);
        return;
    }
    
    let filteredRecipes = [...recipes, ...userRecipes];
    
    if (currentFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === currentFilter);
    }
    
    filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery) ||
        recipe.description.toLowerCase().includes(searchQuery) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery))
    );
    
    allRecipesContainer.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        allRecipesContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Không tìm thấy công thức phù hợp.</p>';
    } else {
        filteredRecipes.forEach(recipe => {
            allRecipesContainer.innerHTML += createRecipeCard(recipe);
        });
    }
}

function smartCook() {
    const ingredientsInput = document.getElementById('smartCookInput').value.toLowerCase().trim();
    
    if (!ingredientsInput) {
        showNotification('Vui lòng nhập nguyên liệu bạn có!', 'error');
        return;
    }
    
    showPage('recipes');
    currentFilter = 'all';
    
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    
    const allFilter = document.querySelector('.category-filter[onclick*="all"]');
    if (allFilter) {
        allFilter.classList.add('active');
    }
    
    const recipeSearchInput = document.getElementById('recipeSearchInput');
    if (recipeSearchInput) {
        recipeSearchInput.value = ingredientsInput;
    }
    
    const allRecipesContainer = document.getElementById('allRecipes');
    allRecipesContainer.innerHTML = '';
    
    const ingredients = ingredientsInput.split(',').map(i => i.trim());
    let matchedRecipes = [...recipes, ...userRecipes];
    
    ingredients.forEach(ingredient => {
        matchedRecipes = matchedRecipes.filter(recipe => 
            recipe.ingredients.some(recipeIngredient => 
                recipeIngredient.toLowerCase().includes(ingredient)
            )
        );
    });
    
    matchedRecipes = [...new Set(matchedRecipes)];
    
    if (ingredients.length > 1) {
        matchedRecipes.sort((a, b) => {
            const aMatches = ingredients.filter(ingredient => 
                a.ingredients.some(recipeIngredient => 
                    recipeIngredient.toLowerCase().includes(ingredient)
                )
            ).length;
            
            const bMatches = ingredients.filter(ingredient => 
                b.ingredients.some(recipeIngredient => 
                    recipeIngredient.toLowerCase().includes(ingredient)
                )
            ).length;
            
            return bMatches - aMatches;
        });
    }
    
    if (matchedRecipes.length === 0) {
        allRecipesContainer.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <h3>Không tìm thấy công thức phù hợp</h3>
                <p>Không có công thức nào chứa nguyên liệu: <strong>${ingredientsInput}</strong></p>
                <p>Hãy thử với nguyên liệu khác hoặc xem tất cả công thức.</p>
                <button class="btn" onclick="filterByCategory('all')" style="margin-top: 1rem;">Xem tất cả công thức</button>
            </div>
        `;
    } else {
        const resultsHeader = document.createElement('div');
        resultsHeader.style.cssText = 'grid-column: 1 / -1; text-align: center; margin-bottom: 1rem; padding: 1rem; background: var(--primary-light); border-radius: 10px;';
        resultsHeader.innerHTML = `
            <h3>Kết quả tìm kiếm với nguyên liệu: <strong>${ingredientsInput}</strong></h3>
            <p>Tìm thấy ${matchedRecipes.length} công thức phù hợp</p>
        `;
        allRecipesContainer.appendChild(resultsHeader);
        
        matchedRecipes.forEach(recipe => {
            allRecipesContainer.innerHTML += createRecipeCard(recipe);
        });
    }
    
    document.getElementById('smartCookInput').value = '';
}

function setupSmartCookSuggestions() {
    const smartCookInput = document.getElementById('smartCookInput');
    if (!smartCookInput) return;
    
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'smart-cook-suggestions';
    suggestionsContainer.style.cssText = `
        position: absolute;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-height: 150px;
        overflow-y: auto;
        width: 100%;
        z-index: 1000;
        display: none;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    smartCookInput.parentNode.appendChild(suggestionsContainer);
    
    const allRecipes = [...recipes, ...userRecipes];
    const allIngredients = [...new Set(allRecipes.flatMap(recipe => recipe.ingredients))];
    
    smartCookInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        suggestionsContainer.innerHTML = '';
        
        if (value.length > 1) {
            const filteredIngredients = allIngredients.filter(ingredient => 
                ingredient.toLowerCase().includes(value)
            ).slice(0, 5);
            
            if (filteredIngredients.length > 0) {
                filteredIngredients.forEach(ingredient => {
                    const suggestion = document.createElement('div');
                    suggestion.textContent = ingredient;
                    suggestion.style.cssText = 'padding: 8px 12px; cursor: pointer; border-bottom: 1px solid #eee;';
                    suggestion.addEventListener('click', function() {
                        smartCookInput.value = ingredient;
                        suggestionsContainer.style.display = 'none';
                        smartCook();
                    });
                    suggestion.addEventListener('mouseover', function() {
                        this.style.background = '#f5f5f5';
                    });
                    suggestion.addEventListener('mouseout', function() {
                        this.style.background = 'white';
                    });
                    suggestionsContainer.appendChild(suggestion);
                });
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!smartCookInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

function setupRecipeSearchSuggestions() {
    const inputs = [
        { el: document.getElementById('recipeSearchInput'), handler: searchRecipes },
        { el: document.getElementById('searchInput'), handler: performSearch }
    ].filter(i => i.el);

    if (inputs.length === 0) return;

    const allRecipes = [...recipes, ...userRecipes];
    const titleSuggestions = [...new Set(allRecipes.map(r => r.title))];
    const ingredientSuggestions = [...new Set(allRecipes.flatMap(r => r.ingredients))];
    const categorySuggestions = Object.values(categories).map(c => c.name);

    const suggestionPool = [...titleSuggestions, ...ingredientSuggestions, ...categorySuggestions];

    inputs.forEach(({ el, handler }) => {
        const container = document.createElement('div');
        container.className = 'suggestions-dropdown';
        container.style.display = 'none';
        el.parentNode.style.position = 'relative';
        el.parentNode.appendChild(container);

        let activeIndex = -1;
        let currentItems = [];
        let debounceTimer = null;

        function showSuggestions(items) {
            container.innerHTML = '';
            currentItems = items;
            activeIndex = -1;

            if (items.length === 0) {
                container.style.display = 'none';
                return;
            }

            items.slice(0, 8).forEach((text, idx) => {
                const recipe = allRecipes.find(r => r.title === text);

                const div = document.createElement('div');
                div.className = 'suggestion-item';

                if (recipe && recipe.image) {
                    div.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <span>${recipe.title}</span>
                    `;
                } else {
                    div.innerHTML = `<span>${text}</span>`;
                }
                div.dataset.index = idx;
                div.addEventListener('click', function(e) {
                    el.value = text;
                    container.style.display = 'none';
                    handler();
                });
                container.appendChild(div);
            });

            container.style.display = 'block';
        }

        el.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            const value = this.value.trim().toLowerCase();
            debounceTimer = setTimeout(() => {
                if (value.length < 1) {
                    container.style.display = 'none';
                    return;
                }

                const matches = suggestionPool.filter(s => s.toLowerCase().includes(value));
                showSuggestions(matches);
            }, 200);
        });

        el.addEventListener('keydown', function(e) {
            if (container.style.display === 'none') return;
            const items = container.querySelectorAll('.suggestion-item');
            if (!items.length) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = Math.min(activeIndex + 1, items.length - 1);
                updateActive(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = Math.max(activeIndex - 1, 0);
                updateActive(items);
            } else if (e.key === 'Enter') {
                if (activeIndex >= 0) {
                    e.preventDefault();
                    const chosen = items[activeIndex];
                    if (chosen) {
                        el.value = chosen.textContent;
                        container.style.display = 'none';
                        handler();
                    }
                }
            } else if (e.key === 'Escape') {
                container.style.display = 'none';
            }
        });

        function updateActive(items) {
            items.forEach(it => it.classList.remove('active'));
            if (activeIndex >= 0 && items[activeIndex]) {
                items[activeIndex].classList.add('active');
                items[activeIndex].scrollIntoView({ block: 'nearest' });
            }
        }

        document.addEventListener('click', function(e) {
            if (!el.contains(e.target) && !container.contains(e.target)) {
                container.style.display = 'none';
            }
        });
    });
}

// ==================== CHIA SẺ CÔNG THỨC ====================

function shareRecipe(recipeId, event) {
    if (event) event.stopPropagation();
    
    const recipe = [...recipes, ...userRecipes].find(r => r.id === recipeId);
    if (!recipe) return;
    
    const shareUrl = window.location.href.split('?')[0];
    const shareText = `Check out this amazing recipe: ${recipe.title} - ${recipe.description}`;
    
    if (navigator.share) {
        navigator.share({
            title: recipe.title,
            text: shareText,
            url: shareUrl,
        })
        .then(() => showNotification('Chia sẻ thành công!', 'success'))
        .catch((error) => console.log('Error sharing:', error));
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
            showNotification('Đã copy link công thức!', 'success');
        });
    } else {
        prompt('Copy link để chia sẻ:', shareUrl);
        showNotification('Đã copy link công thức!', 'success');
    }
}

// ==================== HỆ THỐNG THÔNG BÁO ====================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ==================== CỘNG ĐỒNG ====================

function filterCommunity(filterType) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadCommunityUsers(filterType);
}

function viewUserProfile(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    const modalContent = `
        <div class="user-profile-modal">
            <div class="modal-header">
                <div class="user-avatar-large">
                    ${user.avatar ? 
                        `<img src="${user.avatar}" alt="${user.name}">` : 
                        `<i class="fas fa-user"></i>`
                    }
                </div>
                <div class="user-info">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <p>Tham gia từ: ${user.joinDate}</p>
                </div>
            </div>
            ${user.bio ? `<div class="user-bio-section"><p>${user.bio}</p></div>` : ''}
            <div class="user-stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${user.recipesCount || 0}</div>
                    <div class="stat-label">Công thức</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${user.likesCount || 0}</div>
                    <div class="stat-label">Lượt thích</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${user.savedRecipesCount || 0}</div>
                    <div class="stat-label">Đã lưu</div>
                </div>
            </div>
        </div>
    `;
    
    const tempModal = document.createElement('div');
    tempModal.className = 'modal';
    tempModal.style.display = 'flex';
    tempModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</button>
            ${modalContent}
        </div>
    `;
    
    document.body.appendChild(tempModal);
    
    tempModal.addEventListener('click', function(e) {
        if (e.target === tempModal) {
            tempModal.remove();
        }
    });
}

// ==================== KHỞI TẠO ỨNG DỤNG ====================

document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
    checkAuthStatus();
    loadHomeRecipes();
    loadAllRecipes();
    loadCommunityUsers();
    setupSmartCookSuggestions();
    setupRecipeSearchSuggestions();
    setupModals();
    setupSearchListeners();
});

