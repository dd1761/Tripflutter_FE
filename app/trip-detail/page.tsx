"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../components/TripDetails/TripDetails.module.css";

const GoogleMapComponent = dynamic(
  () => import("../components/GoogleMap/GoogleMapComponent"),
  { ssr: false }
);

const DragDropContext = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.DragDropContext),
  { ssr: false }
);
const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

type Location = {
  id: string;
  name: string;
  info: string;
  time: string;
  lat: number;
  lng: number;
};

type TripData = {
  [key: string]: Location[];
};

const initialTripData: TripData = {
  "1일차": [
    {
      id: "1_kaminarimon",
      name: "카미나리몬",
      info: "관광명소 • 아사쿠사",
      time: "14:00",
      lat: 35.7115,
      lng: 139.7967,
    },
    {
      id: "2_sensoji",
      name: "센소지",
      info: "관광명소 • 아사쿠사",
      time: "14:10",
      lat: 35.7148,
      lng: 139.7967,
    },
    {
      id: "3_puglen_asakusa",
      name: "푸글렌 아사쿠사 점",
      info: "카페/디저트 • 아사쿠사",
      time: "15:20",
      lat: 35.7132,
      lng: 139.7978,
    },
    {
      id: "4_tokyo_skytree",
      name: "도쿄 소라마치",
      info: "쇼핑 • 아사쿠사",
      time: "16:30",
      lat: 35.7101,
      lng: 139.8107,
    },
  ],
  "2일차": [
    {
      id: "1_sensoji",
      name: "센소지",
      info: "관광명소 • 아사쿠사",
      time: "10:00",
      lat: 35.7148,
      lng: 139.7967,
    },
    {
      id: "2_kuramae",
      name: "쿠라마에 거리",
      info: "관광명소 • 아사쿠사",
      time: "11:30",
      lat: 35.7088,
      lng: 139.7894,
    },
    {
      id: "3_kappabashi",
      name: "긴자식스",
      info: "쇼핑 • 긴자",
      time: "13:00",
      lat: 35.6695,
      lng: 139.7644,
    },
    {
      id: "4_itoya",
      name: "이토야 긴자 본점",
      info: "쇼핑 • 긴자",
      time: "15:00",
      lat: 35.6721,
      lng: 139.7671,
    },
    {
      id: "5_azabudai_hills_mori_tower",
      name: "아자부다이 힐즈 모리 JP 타워",
      info: "관광명소 • 롯폰기",
      time: "16:30",
      lat: 35.6586,
      lng: 139.7454,
    },
    {
      id: "6_teamlab_borderless",
      name: "팀랩 보더리스",
      info: "테마/체험 • 롯폰기",
      time: "18:00",
      lat: 35.6586,
      lng: 139.7282,
    },
  ],
  "3일차": [
    {
      id: "1_kichijoji",
      name: "기치조지",
      info: "관광명소",
      time: "10:00",
      lat: 35.7033,
      lng: 139.5795,
    },
    {
      id: "2_inokashira_onsen_park",
      name: "이노카시라 온시 공원",
      info: "관광명소",
      time: "11:30",
      lat: 35.7005,
      lng: 139.5703,
    },
    {
      id: "3_ghibli_museum",
      name: "지브리 미술관",
      info: "관광명소",
      time: "12:30",
      lat: 35.6961,
      lng: 139.5706,
    },
    {
      id: "4_kichijoji_sun_road",
      name: "고엔지 거리",
      info: "쇼핑",
      time: "15:00",
      lat: 35.7048,
      lng: 139.6502,
    },
    {
      id: "5_shimokitazawa",
      name: "시모키타자와",
      info: "관광명소",
      time: "17:00",
      lat: 35.6613,
      lng: 139.6687,
    },
  ],
  "4일차": [
    {
      id: "1_nezu_museum",
      name: "네즈 미술관",
      info: "관광명소",
      time: "10:00",
      lat: 35.6616,
      lng: 139.7213,
    },
    {
      id: "2_ebisu_garden_place",
      name: "에비스 가든 플레이스",
      info: "쇼핑 • 시부야",
      time: "12:30",
      lat: 35.6487,
      lng: 139.7016,
    },
    {
      id: "3_starbucks_reserve_roastery_tokyo",
      name: "스타벅스 리저브 로스터리 도쿄 점",
      info: "카페/디저트",
      time: "15:00",
      lat: 35.6667,
      lng: 139.7019,
    },
    {
      id: "4_daikanyama",
      name: "다이칸야마",
      info: "관광명소 • 시부야",
      time: "16:30",
      lat: 35.6581,
      lng: 139.7013,
    },
    {
      id: "5_garaku",
      name: "가구라자카",
      info: "관광명소 • 신주쿠",
      time: "19:00",
      lat: 35.6938,
      lng: 139.7037,
    },
  ],
};

const Trip_Detail: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("1일차");
  const [tripData, setTripData] = useState<TripData>(initialTripData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 35.6895,
    lng: 139.6917,
  };

  const locations = tripData[selectedDay].map((location) => ({
    lat: location.lat,
    lng: location.lng,
  }));

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tripData[selectedDay]);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTripData({
      ...tripData,
      [selectedDay]: items,
    });
  };

  const renderLocationItem = (
    location: Location,
    index: number,
    isDraggable: boolean = false
  ) => {
    const content = (
      <>
        <span className={styles.LocationNumber}>{index + 1}</span>
        <div className={styles.LocationDetails}>
          <p className={styles.LocationName}>{location.name}</p>
          <p className={styles.LocationInfo}>{location.info}</p>
        </div>
        <p className={styles.LocationTime}>{location.time}</p>
      </>
    );

    if (isDraggable) {
      return (
        <Draggable
          key={location.name}
          draggableId={location.name}
          index={index}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`${styles.LocationItem} ${
                snapshot.isDragging ? styles.dragging : ""
              }`}
            >
              {content}
            </div>
          )}
        </Draggable>
      );
    }

    return (
      <div key={location.name} className={styles.LocationItem}>
        {content}
      </div>
    );
  };

  return (
    <div className={styles.Trip_detail_Container}>
      <div>
        <h1 className={styles.Trip_detail_corseTitle}>도쿄 추천 코스 👍</h1>
        <p className={styles.Trip_detail_corse_SubTitle}>
          세계적인 대도시 중 하나인 만큼 도쿄를 제대로 돌아보려고 하면 일주일도
          빠듯하다. 그러나 바쁜 여행자들에게는 3박 4일의 짧은 일정을 짜는 것은
          지혜가 필요하다. 도쿄를 둘러보는 가장 효율적인 동선을 소개한다.
        </p>
      </div>
      <div className={styles.Trip_detail_buttonGroup}>
        {Object.keys(tripData).map((day) => (
          <button
            key={day}
            className={`${styles.Day_button} ${
              selectedDay === day ? styles.active : ""
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className={styles.googleMap}>
        <GoogleMapComponent
          mapContainerStyle={mapContainerStyle}
          center={center}
          locations={locations}
        />
      </div>
      {isClient ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="locations">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.LocationList}
              >
                {tripData[selectedDay].map((location, index) =>
                  renderLocationItem(location, index, true)
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div className={styles.LocationList}>
          {tripData[selectedDay].map((location, index) =>
            renderLocationItem(location, index)
          )}
        </div>
      )}
    </div>
  );
};

export default Trip_Detail;
