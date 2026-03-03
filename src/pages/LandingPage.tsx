import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
// import { Badge } from '@/components/ui/Badge';
import { popularSkills } from '@/data/skills';
import { motion } from 'framer-motion';

import HeroIllustration from '@/assets/hero.svg';
import BlobPurple from '@/assets/blob-purple.svg';
import BlobIndigo from '@/assets/blob-indigo.svg';
export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">

  {/* BLOBS */}
  <img
    src={BlobPurple}
    className="absolute -top-24 -left-24 w-[600px] opacity-50 blur-3xl z-0 pointer-events-none"
    alt=""
  />
  <img
    src={BlobIndigo}
    className="absolute top-1/3 -right-24 w-[600px] opacity-50 blur-3xl z-0 pointer-events-none"
    alt=""
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT: TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* BADGE */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
        bg-purple-500/10 text-purple-400 border border-purple-500/20 backdrop-blur">
        ✨ skill swapping made social
      </div>

      {/* HEADLINE */}
      <h1 className="
        text-4xl md:text-6xl lg:text-7xl
        font-extrabold leading-tight mb-6
        bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400
        bg-clip-text text-transparent
      ">
        Learn what you love. <br />
        Teach what you know.
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10">
        No money. No courses.  
        Just people exchanging skills, growing together, and vibing while learning 🤝
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/signup">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="
                px-8 py-6 text-lg
                bg-gradient-to-r from-purple-500 to-indigo-500
                text-white
                shadow-2xl shadow-purple-500/40
              "
            >
              Start Swapping <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </Link>

        <Link to="/browse">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-white/20 backdrop-blur"
          >
            Explore Skills 👀
          </Button>
        </Link>
      </div>
    </motion.div>

    {/* RIGHT: ILLUSTRATION */}
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className="relative"
    >
      <img
        src={HeroIllustration}
        alt="Skill Swap Illustration"
        className="w-full max-w-md mx-auto"
      />
    </motion.div>
  </div>
</section>

      <section className="relative py-28 px-4 bg-muted/40">
  <div className="max-w-6xl mx-auto">
    {/* SECTION TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      How It Works
    </motion.h2>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: Users,
          title: 'Create Your Profile',
          desc: 'List the skills you can teach and what you want to learn',
        },
        {
          icon: Zap,
          title: 'Find Matches',
          desc: 'Get matched with people who complement your skills',
        },
        {
          icon: TrendingUp,
          title: 'Start Swapping',
          desc: 'Propose skill swaps and start learning together',
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              rounded-2xl
              bg-background/80
              backdrop-blur
              border border-white/10
              p-8
              shadow-lg hover:shadow-2xl
              transition-all
            "
          >
            {/* ICON */}
            <div className="
              h-14 w-14 mb-6
              rounded-xl
              bg-gradient-to-br from-purple-500/20 to-indigo-500/20
              flex items-center justify-center
            ">
              <Icon className="h-6 w-6 text-purple-400" />
            </div>

            {/* TEXT */}
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      <section className="relative py-28 px-4">
  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Popular Skills
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Explore what our community is actively teaching and learning
      </p>
    </motion.div>

    {/* SKILLS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {popularSkills.slice(0, 6).map((skill, i) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="
            group rounded-2xl
            bg-background/80
            backdrop-blur
            border border-white/10
            p-6
            shadow-lg hover:shadow-2xl
            transition-all cursor-pointer
          "
        >
          {/* HEADER */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
              {skill.name}
            </h3>

            <span className="
              text-xs px-3 py-1
              rounded-full
              bg-purple-500/10
              text-purple-400
              border border-purple-500/20
            ">
              {skill.category}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
            {skill.description}
          </p>

          {/* FOOTER */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {Math.floor(Math.random() * 50) + 10}+ people offering
            </span>

            <span className="
              text-purple-400
              opacity-0 group-hover:opacity-100
              transition-opacity
            ">
              View →
            </span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <Link to="/browse">
        <Button
          variant="outline"
          size="lg"
          className="
            px-10
            hover:scale-105
            transition-transform
          "
        >
          View All Skills
        </Button>
      </Link>
    </motion.div>
  </div>
</section>

      <section className="relative py-28 px-4 bg-muted/40">
  <div className="max-w-6xl mx-auto">

    {/* SECTION TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center mb-20"
    >
      Why Skill Swap?
    </motion.h2>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          icon: Shield,
          title: 'No Money Involved',
          desc: 'Exchange skills directly without any financial transactions.',
        },
        {
          icon: Users,
          title: 'Build Community',
          desc: 'Connect with like-minded learners and create lasting relationships.',
        },
        {
          icon: Zap,
          title: 'Learn Faster',
          desc: 'One-on-one skill exchange is more effective than traditional learning.',
        },
        {
          icon: TrendingUp,
          title: 'Grow Together',
          desc: 'Both parties benefit equally from every skill swap.',
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              flex gap-6
              rounded-2xl
              bg-background/80
              backdrop-blur
              border border-white/10
              p-8
            "
          >
            {/* ICON */}
            <div className="
              h-12 w-12
              rounded-xl
              bg-gradient-to-br from-purple-500/20 to-indigo-500/20
              flex items-center justify-center
              flex-shrink-0
            ">
              <Icon className="h-5 w-5 text-purple-400" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      <section className="relative overflow-hidden py-32 px-4">
  {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-violet-600/20" />
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_65%)]" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center"
  >
    <h2 className="
      text-3xl md:text-5xl
      font-extrabold
      mb-6
      bg-gradient-to-r from-purple-400 to-indigo-400
      bg-clip-text text-transparent
    ">
      Ready to Start Learning Together?
    </h2>

    <p className="text-lg md:text-xl text-muted-foreground mb-10">
      Join a growing community where skills matter more than money.
      Teach what you know. Learn what you love.
    </p>

    <Link to="/signup">
      <Button
        size="lg"
        className="
          px-10 py-6
          text-lg
          bg-gradient-to-r from-purple-500 to-indigo-500
          text-white
          hover:scale-105
          active:scale-95
          transition-all
          shadow-2xl shadow-purple-500/40
        "
      >
        Create Free Account <ArrowRight className="ml-2 h-6 w-6" />
      </Button>
    </Link>
  </motion.div>
</section>
    </div>
  );
};
