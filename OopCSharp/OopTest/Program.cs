using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopTest
{
    class Program
    {
        static void Main(string[] args)
        {
            PointColor dima = new PointColor();
            PointColor sania = new PointColor();

            dima.Input();
            dima.Output();
            sania.Input();
            sania.Output();

            PointColor p = dima + sania;
            p.Output();

            Console.ReadKey();
        }
    }

    public class Point
    {
        private double x;
        private double y;

        public double X
        {
            get { return x; }
            set { x = value; }
        }

        public double Y
        {
            get { return y; }
            set { y = value; }
        }

        public void InputX()
        {
            try
            {
                Console.Write("Input x(0-799): ");
                x = Convert.ToDouble(Console.ReadLine());
                if(x < 0 || x > 799)
                {
                    x = 0;
                    throw new Exception();  
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public void InputY()
        {
            try
            {
                Console.Write("Input y(0-599): ");
                y = Convert.ToDouble(Console.ReadLine());
                if (y < 0 || y > 599)
                {
                    y = 0;
                    throw new Exception();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public virtual void Output()
        {
            Console.WriteLine("X = " + x);
            Console.WriteLine("Y = " + y);
        }
    }

    class PointColor : Point
    {
        struct Color
        {
            private int red;
            private int green;
            private int blue;

            public int Red
            {
                get { return red; }
                set { red = value; }
            }

            public int Green
            {
                get { return green; }
                set { green = value; }
            }

            public int Blue
            {
                get { return blue; }
                set { blue = value; }
            }
        }

        private Color dotColor;

        public void Input()
        {
            base.InputX();
            base.InputY();
            try
            {
                Console.Write("Input red color(0-255): ");
                dotColor.Red = Convert.ToInt32(Console.ReadLine());
                if (dotColor.Red < 0 || dotColor.Red > 255)
                {
                    dotColor.Red = 0;
                    throw new Exception();
                }
               
                Console.Write("Input green color(0-255): ");
                dotColor.Green = Convert.ToInt32(Console.ReadLine());
                if (dotColor.Green < 0 || dotColor.Green > 255)
                {
                    dotColor.Green = 0;
                    throw new Exception();
                }
                Console.Write("Input red color(0-255): ");
                dotColor.Green = Convert.ToInt32(Console.ReadLine());
                if (dotColor.Green < 0 || dotColor.Green > 255)
                {
                    dotColor.Green = 0;
                    throw new Exception();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public override void Output()
        {
            base.Output();
            Console.WriteLine("rgb(" + dotColor.Red + ", " + dotColor.Green + ", " + dotColor.Blue + ")\n"); 
        }

        public static PointColor operator +(PointColor first, PointColor second)
        {
            if (first == null || second == null)
                throw new Exception();
            PointColor point = new PointColor();

            point.dotColor.Red = (first.dotColor.Red + second.dotColor.Red) / 2;
            point.dotColor.Green = (first.dotColor.Green + second.dotColor.Green) / 2;
            point.dotColor.Blue = (first.dotColor.Blue + second.dotColor.Blue) / 2;

            point.X = first.X + second.X;
            if (point.X > 799) point.X = 799;
            point.Y = first.Y + second.Y;
            if (point.Y > 599) point.Y = 599;
            return point;
        }
    }
}