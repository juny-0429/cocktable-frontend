import React from "react";

export function generateStarRating(rating: string) {

    const maxStars: number = 5; // 최대 별 개수
    const filledStars: number = parseInt(rating); // 특성 값에 따라 꽉 찬 별 개수를 정합니다
    const emptyStars = maxStars - filledStars; // 비어있는 별 개수를 계산합니다
  
    return (
      <>
        {[...Array(filledStars).keys()].map((index) => (
          <span key={index} >★</span>
        ))}
        {[...Array(emptyStars).keys()].map((index) => (
          <span key={index} >☆</span>
        ))}
      </>
    );
}