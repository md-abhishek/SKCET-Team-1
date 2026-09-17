import java.util.*;
import java.util.stream.Collectors;

public class EmployeeFilterUsingStreams {

    static class Employee {
        int id;
        String name;
        int age;
        double salary;

        Employee(int id, String name, int age, double salary) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.salary = salary;
        }

        @Override
        public String toString() {
            return id + " " + name + " " + age + " " + salary;
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<Employee> employees = new ArrayList<>();

        System.out.print("Enter number of employees: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("Enter details of employee " + (i + 1) + ":");

            System.out.print("ID: ");
            int id = sc.nextInt();

            System.out.print("Name: ");
            String name = sc.next();

            System.out.print("Age: ");
            int age = sc.nextInt();

            System.out.print("Salary: ");
            double salary = sc.nextDouble();

            employees.add(new Employee(id, name, age, salary));
        }

        System.out.print("Enter maximum age: ");
        int maxAge = sc.nextInt();

        System.out.print("Enter minimum salary: ");
        double minSalary = sc.nextDouble();

        List<Employee> filteredEmployees = employees.stream()
                .filter(e -> e.age <= maxAge)
                .filter(e -> e.salary >= minSalary)
                .collect(Collectors.toList());

        System.out.println("Filtered employees:");

        for (Employee employee : filteredEmployees) {
            System.out.println(employee);
        }

        sc.close();
    }
}