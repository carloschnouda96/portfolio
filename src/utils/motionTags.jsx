"use client";

import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

export const MotionDiv = motion(motion.div);
export const MotionImage = motion(Image);
export const MotionList = motion(motion.li);
export const MotionButton = motion(Button);
export const MotionTabs = motion(Tabs);
