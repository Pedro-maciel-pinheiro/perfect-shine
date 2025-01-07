"use client"
import { useSectionInView } from '@/hooks/active-section-hook';
import React from 'react'

export default function BookDetail() {
  const { ref } = useSectionInView("Book a detail");
  return (
    <div ref={ref }>BookDetail</div>
  )
}
