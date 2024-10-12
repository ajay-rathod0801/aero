"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
};

export const ColorPicker = ({
  onChange,
}: ColorPickerProps) => {
  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[180px] pr-2 mr-2 border-r border-neutral-200"
    >
      <ColorButton color={{ r: 255, g: 67, b: 54, }} onClick={onChange} />
      <ColorButton color={{ r: 33, g: 150, b: 243, }} onClick={onChange} />
      <ColorButton color={{ r: 139, g: 195, b: 74, }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 193, b: 7, }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 255, b: 255, }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 0, b: 255, }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0, }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255, }} onClick={onChange} />
    </div>
  )
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = ({
  onClick,
  color,
}: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-full border border-neutral-300"
        style={{
          background: colorToCss(color),
        }}
      />
    </button>
  )
};