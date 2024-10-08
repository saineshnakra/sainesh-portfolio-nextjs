"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS SDK

// Particle animation component
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

// Contact section with particle animation
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("gs9KuoeMg16x-VYCn"); // Using your provided Public Key
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    // Use sendForm to send the form data through EmailJS
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_hdz9af9", // Using your provided Service ID
          "template_vu6wdc7", // Using your provided Template ID
          formRef.current
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSuccess(true);
            formRef.current?.reset(); // Clear form after success
          },
          (error) => {
            console.log("FAILED...", error.text);
            setError(true);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      <ParticleCanvas />
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Get in Touch</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <Textarea name="message" placeholder="Your Message" required />
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 mt-4">
                Failed to send message. Please try again later.
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saineshnakra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/saineshnakra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
