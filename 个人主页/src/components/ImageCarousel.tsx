import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    alt?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt = "照片" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-full group">
            {/* 主图片 */}
            <div className="w-full h-full overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`${alt} ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 左右切换按钮（悬停时显示）*/}
            <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                aria-label="上一张"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                aria-label="下一张"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* 分页点（底部居中）*/}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`transition-all duration-300 ${index === currentIndex
                                ? 'w-8 h-2 bg-white'
                                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                            } rounded-full`}
                        aria-label={`切换到照片 ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
