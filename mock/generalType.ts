const generalTypes = [
  {
    id: 11,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Ryokan",
    label_vi: "Ryokan",
    desc_en: "A traditional Japanese inn that offers accommodation with meals.",
    desc_vi:
      "Một ký túc xá truyền thống của Nhật Bản cung cấp chỗ ở kèm theo bữa ăn.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 10,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Riad",
    label_vi: "Riad",
    desc_en:
      "A traditional Morrocan house or palace that offers accommodation.",
    desc_vi:
      "Một ngôi nhà hoặc cung điện truyền thống ở Ma-rốc cung cấp chỗ ở.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 9,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Resort",
    label_vi: "Khu nghỉ dưỡng",
    desc_en:
      "A complex of accommodation that offers private rooms and recreational facilities.",
    desc_vi:
      "Một quần thể nơi lưu trú cung cấp phòng riêng và các cơ sở vui chơi giải trí.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 8,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Hotel",
    label_vi: "Khách sạn",
    desc_en:
      "A commercial accommodation that provides private rooms with meals and guest services.",
    desc_vi:
      "Một nơi lưu trú thương mại cung cấp phòng riêng với bữa ăn và dịch vụ cho khách.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 7,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Hostel",
    label_vi: "Nhà trọ",
    desc_en:
      "A budget accommodation that provides lodging, usually with dorm-style beds.",
    desc_vi:
      "Nơi lưu trú ngân sách cung cấp chỗ ở, thường là giường dạng ký túc xá.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 6,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Homestay",
    label_vi: "Chỗ ở theo kiểu Homestay",
    desc_en:
      "A budget accommodation where the guest has private room while sharing some shared areas with other guests.",
    desc_vi:
      "Một nơi lưu trú ngân sách nơi khách có phòng riêng nhưng phải chia sẻ một số khu vực chung với khách khác.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 5,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Guest House",
    label_vi: "Nhà khách",
    desc_en:
      "Small commercial accommodation that usually converted from a private house.",
    desc_vi:
      "Nơi lưu trú thương mại nhỏ thường được chuyển đổi từ ngôi nhà riêng.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 4,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Capsule Hotel",
    label_vi: "Khách sạn Capsule",
    desc_en:
      "Small unit of capsule accommodation that offers lodging with basic overnight accommodation.",
    desc_vi: "Đơn vị nhà nghỉ dạng cá nhân cung cấp chỗ ở cơ bản qua đêm.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 3,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Bed and Breakfast",
    label_vi: "Chỗ ở kiểu Bed and Breakfast",
    desc_en:
      "Small commercial accommodation or private home that offers overnight stay with breakfast.",
    desc_vi:
      "Chỗ ở thương mại nhỏ hoặc nhà riêng cung cấp nơi nghỉ qua đêm với bữa sáng.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 2,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Serviced Apartment",
    label_vi: "Căn hộ dịch vụ",
    desc_en:
      "Furnished residential in an apartment building that provides private rooms with hotel-like services.",
    desc_vi:
      "Căn hộ được trang bị đầy đủ trong tòa nhà chung cư cung cấp phòng riêng với dịch vụ như ở khách sạn.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 1,
    class: "HOTEL_ACCOMMODATION",
    label_en: "Hotel",
    label_vi: "Khách sạn",
    desc_en:
      "A commercial accommodation that provides private rooms with meals and guest service.",
    desc_vi:
      "Một nơi lưu trú thương mại cung cấp phòng riêng với bữa ăn và dịch vụ cho khách.",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 18,
    class: "UNIQUE_ACCOMMODATION",
    label_en: "Unique Accommodation",
    label_vi: "Chỗ ở độc đáo",
    desc_en:
      "A place of stay that is not common to be used as an accommodation, such as boat house, camp, and so on.",
    desc_vi:
      "Một nơi lưu trú không phổ biến như làm nơi ở như nhà trên thuyền, trại và các loại chỗ ở khác.",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 17,
    class: "APARTMENT_ACCOMMODATION",
    label_en: "Entire Apartment",
    label_vi: "Toàn bộ căn hộ",
    desc_en:
      "Guests will have the whole place to themselves—they don't have to share facilities with other guests such as bathrooms, common rooms, and kitchen.",
    desc_vi:
      "Khách sẽ có toàn bộ nơi ở cho riêng mình—họ không cần phải chia sẻ các tiện nghi như phòng tắm, phòng chung và nhà bếp với khách khác.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 16,
    class: "APARTMENT_ACCOMMODATION",
    label_en: "Private Room",
    label_vi: "Phòng riêng",
    desc_en:
      "Guests will only have a private room for themselves. They will need to share common room, kitchen, or bathroom with other guests/host.",
    desc_vi:
      "Khách chỉ có một phòng riêng cho họ. Họ sẽ cần phải chia sẻ phòng chung, nhà bếp hoặc phòng tắm với khách khác/chủ nhà.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 15,
    class: "APARTMENT_ACCOMMODATION",
    label_en: "Apartment",
    label_vi: "Căn hộ",
    desc_en:
      "Furnished residential that provides private rooms and located in an apartment building.",
    desc_vi:
      "Nơi lưu trú được trang bị đầy đủ cung cấp phòng riêng và nằm trong tòa nhà chung cư.",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 14,
    class: "HOUSE_ACCOMMODATION",
    label_en: "Entire House",
    label_vi: "Toàn bộ ngôi nhà",
    desc_en:
      "Guests will have the whole place to themselves—they don't have to share facilities such as bathrooms, common rooms, and kitchen with other guests.",
    desc_vi:
      "Khách sẽ có toàn bộ nơi ở cho riêng mình—họ không cần phải chia sẻ các tiện nghi như phòng tắm, phòng chung và nhà bếp với khách khác.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 13,
    class: "HOUSE_ACCOMMODATION",
    label_en: "Private Room",
    label_vi: "Phòng riêng",
    desc_en:
      "Guests will only have a private room for themselves. They will need to share common room, kitchen, or bathroom with other guests/host.",
    desc_vi:
      "Khách chỉ có một phòng riêng cho họ. Họ sẽ cần phải chia sẻ phòng chung, nhà bếp hoặc phòng tắm với khách khác/chủ nhà.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 12,
    class: "HOUSE_ACCOMMODATION",
    label_en: "House",
    label_vi: "Nhà",
    desc_en:
      "A furnished house that offers accommodation and is rented out as an entire place.",
    desc_vi:
      "Một ngôi nhà được trang bị đầy đủ cung cấp chỗ ở và được cho thuê làm toàn bộ nơi ở.",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 48,
    class: "BED",
    label_en: "Couch",
    label_vi: "Ghế Sofa",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 49,
    class: "BED",
    label_en: "Capsule",
    label_vi: "Ốc",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 50,
    class: "BED",
    label_en: "Sofa Bed",
    label_vi: "Sofa Bed",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 51,
    class: "BED",
    label_en: "Bunk",
    label_vi: "Tầng",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 52,
    class: "BED",
    label_en: "Mattress",
    label_vi: "Nệm",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 21,
    class: "BED",
    label_en: "Single",
    label_vi: "Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 22,
    class: "BED",
    label_en: "Double",
    label_vi: "Đôi",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 23,
    class: "BED",
    label_en: "Twin",
    label_vi: "Đôi",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 24,
    class: "BED",
    label_en: "Queen",
    label_vi: "Nữ Hoàng",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 25,
    class: "BED",
    label_en: "King",
    label_vi: "Vua",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 26,
    class: "BED",
    label_en: "One Single Bed",
    label_vi: "Một Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 27,
    class: "BED",
    label_en: "One Double Bed",
    label_vi: "Một Giường Đôi",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 28,
    class: "BED",
    label_en: "One Queen Bed",
    label_vi: "Một Giường Nữ Hoàng",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 29,
    class: "BED",
    label_en: "One King Bed",
    label_vi: "Một Giường Vua",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 30,
    class: "BED",
    label_en: "One Double Bed and One Single Bed",
    label_vi: "Một Giường Đôi và Một Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 31,
    class: "BED",
    label_en: "One Double Bed and Two Single Bed",
    label_vi: "Một Giường Đôi và Hai Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 32,
    class: "BED",
    label_en: "One Double Bed and Four Single Bed",
    label_vi: "Một Giường Đôi và Bốn Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 33,
    class: "BED",
    label_en: "One Double Bed or Two Single Bed",
    label_vi: "Một Giường Đôi hoặc Hai Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 34,
    class: "BED",
    label_en: "Two Single Bed",
    label_vi: "Hai Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 35,
    class: "BED",
    label_en: "Two Double Bed",
    label_vi: "Hai Giường Đôi",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 36,
    class: "BED",
    label_en: "Two Queen Bed",
    label_vi: "Hai Giường Nữ Hoàng",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 37,
    class: "BED",
    label_en: "Two King Bed",
    label_vi: "Hai Giường Vua",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 38,
    class: "BED",
    label_en: "Two Double and Two Single Bed",
    label_vi: "Hai Giường Đôi và Hai Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 39,
    class: "BED",
    label_en: "Two Double and One Single Bed",
    label_vi: "Hai Giường Đôi và Một Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 40,
    class: "BED",
    label_en: "One King Bed and One Sofa Bed",
    label_vi: "Một Giường Vua và Một Sofa Bed",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 41,
    class: "BED",
    label_en: "One King Bed and Two Single Bed",
    label_vi: "Một Giường Vua và Hai Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 42,
    class: "BED",
    label_en: "Three Single Bed",
    label_vi: "Ba Giường Đơn",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 43,
    class: "BED",
    label_en: "Three Double Bed",
    label_vi: "Ba Giường Đôi",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 44,
    class: "BED",
    label_en: "Double Single and Sofa Bed",
    label_vi: "Đôi Đơn và Giường Sofa",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 45,
    class: "BED",
    label_en: "Capsule Bed",
    label_vi: "Giường Ốc",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 46,
    class: "BED",
    label_en: "Bunk Bed",
    label_vi: "Giường Tầng",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 47,
    class: "BED",
    label_en: "Unknown",
    label_vi: "Không Xác Định",
    desc_en: "",
    desc_vi: "",
    order: 1,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 20,
    class: "UNIQUE_ACCOMMODATION",
    label_en: "Houseboat",
    label_vi: "Nhà trên thuyền",
    desc_en: "A commercial accommodation located on a boat or cruise ship.",
    desc_vi: "Một nơi lưu trú thương mại nằm trên thuyền hoặc tàu du lịch.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
  {
    id: 19,
    class: "UNIQUE_ACCOMMODATION",
    label_en: "Campsite",
    label_vi: "Khu cắm trại",
    desc_en:
      "A place that provides lodging and usually made from temporary structures like hut, camp or tent.",
    desc_vi:
      "Một nơi cung cấp chỗ ở và thường được làm từ cấu trúc tạm thời như lều, trại hoặc túi ngủ.",
    order: 2,
    created_at: "2024-01-24 08:13:37.074 +0700",
    updated_at: "2024-01-24 08:13:37.074 +0700",
    deleted_at: "",
  },
];

export default {
  "GET /general-types/beds/:lang": (req: Request, res: any) => {
    const url = new URL(req.url || "", "http://localhost:8000");
    const lang = url.pathname.split("/")[3];

    const response = {
      data: [] as any[],
    };

    response.data = generalTypes
      .filter((item) => item.class == "BED")
      .map((item) => {
        return {
          id: item.id,
          label: lang == "vi" ? item.label_vi : item.label_en,
        };
      });

    return res.status(200).send(response);
  },
};
